import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Minus } from "lucide-react";

interface PricingOption {
  id: string;
  label: string;
  price: number;
  description?: string;
  isCounter?: boolean;
  counterLabel?: string;
  counterPrice?: number;
  counterDescription?: string;
  counterInitialValue?: number;
  counterFirstYearNote?: string;
}

// Pricing data structure
const pricingData = {
  basePrice: {
    individual: 250, // Federal + State of Residence
    business: 499,   // Placeholder until we get business pricing details
  },
  additionalOptions: {
    individual: [
      { id: "itemized", label: "Itemized Deductions", price: 45, description: "Schedule A deductions" },
      { id: "self-employment", label: "Self-Employment", price: 45, description: "Schedule C for sole proprietors" },
      { 
        id: "rental", 
        label: "Rental Properties ($45-$90)", 
        price: 45, 
        description: "Schedule E rental properties",
        isCounter: true,
        counterLabel: "Number of Rental Properties",
        counterPrice: 45, // Base price, will be adjusted to 90 for first year clients
        counterDescription: "per property",
        counterInitialValue: 1,
        counterFirstYearNote: "First year properties have an additional $45 per property fee for creating depreciation schedules."
      },
      { id: "capital-gains", label: "Capital Gains", price: 25, description: "Schedule D for investment sales" },
      { id: "property-sale", label: "Sale of Property or 1031 Exchange", price: 50, description: "Real estate transactions" },
      { id: "home-office", label: "Home Office", price: 25, description: "Home office deduction" },
      { id: "additional-state", label: "Additional State Filings", price: 45, description: "Per additional state" },
      { id: "revisions", label: "Revisions Due To Missing Information", price: 50, description: "Additional charge for missing information" },
      { id: "foreign", label: "Foreign Income or Account", price: 100, description: "International income or accounts" },
    ],
    business: [
      { id: "llc", label: "Single-Member LLC", price: 100, description: "Simple pass-through LLC" },
      { id: "partnership", label: "Partnership", price: 200, description: "Partnership tax filing" },
      { id: "s-corp", label: "S-Corporation", price: 300, description: "S-Corporation tax filing" },
      { id: "c-corp", label: "C-Corporation", price: 400, description: "C-Corporation tax filing" },
      { id: "employees", label: "Employees (1-10)", price: 150, description: "Business with 1-10 employees" },
      { id: "many-employees", label: "Employees (11+)", price: 250, description: "Business with 11+ employees" },
      { id: "multi-state", label: "Multi-State Operations", price: 200, description: "Business operates in multiple states" },
      { id: "inventory", label: "Inventory Tracking", price: 150, description: "Business with inventory" },
    ],
  },
};

interface PricingCalculatorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PricingCalculator({ open, onOpenChange }: PricingCalculatorProps) {
  const [returnType, setReturnType] = useState<"individual" | "business" | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [optionCounters, setOptionCounters] = useState<Record<string, number>>({});
  const [isFirstYear, setIsFirstYear] = useState<boolean>(true);
  const [newRentalCount, setNewRentalCount] = useState<number>(0);
  const [existingRentalCount, setExistingRentalCount] = useState<number>(0);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  // Calculate the price based on selections
  const calculatePrice = () => {
    if (!returnType) return null;
    
    const base = pricingData.basePrice[returnType];
    let additionalCosts = 0;
    
    // Add costs for selected options
    for (const optionId of selectedOptions) {
      const option = pricingData.additionalOptions[returnType].find(opt => opt.id === optionId);
      if (!option) continue;
      
      if ((option as PricingOption).isCounter && optionCounters[optionId]) {
        // For rental properties, calculate based on first year/returning status and new/existing properties
        if (option.id === "rental") {
          if (isFirstYear) {
            // First year client - all properties are $90
            additionalCosts += 90 * optionCounters[optionId];
          } else {
            // Returning client - existing properties $45, new properties $90
            const existingPropertiesCost = 45 * existingRentalCount;
            const newPropertiesCost = 90 * newRentalCount;
            additionalCosts += (existingPropertiesCost + newPropertiesCost);
          }
        } else {
          // For other counter options, use standard pricing
          additionalCosts += ((option as PricingOption).counterPrice || option.price) * optionCounters[optionId];
        }
      } else {
        // For regular options, just add the price
        additionalCosts += option.price;
      }
    }
    
    return base + additionalCosts;
  };

  // Handle return type selection
  const handleReturnTypeChange = (value: "individual" | "business") => {
    setReturnType(value);
    setSelectedOptions([]);
    setOptionCounters({});
    const newPrice = pricingData.basePrice[value];
    setEstimatedPrice(newPrice);
  };

  // Handle option selection
  const handleOptionChange = (optionId: string, checked: boolean) => {
    // Find the option
    const option = returnType 
      ? pricingData.additionalOptions[returnType].find(opt => opt.id === optionId)
      : null;
      
    let newOptions;
    if (checked) {
      newOptions = [...selectedOptions, optionId];
      
      // Initialize counter if this is a counter option
      if (option && (option as PricingOption).isCounter) {
        setOptionCounters(prev => ({
          ...prev,
          [optionId]: (option as PricingOption).counterInitialValue || 1
        }));
      }
    } else {
      newOptions = selectedOptions.filter(id => id !== optionId);
      
      // Remove counter if unchecking a counter option
      if (option && (option as PricingOption).isCounter) {
        setOptionCounters(prev => {
          const newCounters = { ...prev };
          delete newCounters[optionId];
          return newCounters;
        });
      }
    }
    
    setSelectedOptions(newOptions);
    
    // Recalculate price
    setTimeout(() => {
      const newPrice = calculatePrice();
      setEstimatedPrice(newPrice);
    }, 0);
  };
  
  // Handle counter changes
  const handleCounterChange = (optionId: string, newValue: number) => {
    // Ensure minimum value is 1
    const adjustedValue = Math.max(1, newValue);
    setOptionCounters(prev => ({
      ...prev,
      [optionId]: adjustedValue
    }));
    
    // For rental properties, we need to update the specific counts
    if (optionId === "rental") {
      if (isFirstYear) {
        // For first year clients, we just need the total count
        setNewRentalCount(0);
        setExistingRentalCount(0);
      } else {
        // For returning clients, adjust existing/new counts as needed
        const currentTotal = existingRentalCount + newRentalCount;
        if (adjustedValue > currentTotal) {
          // If increasing, add to existing properties
          setExistingRentalCount(existingRentalCount + (adjustedValue - currentTotal));
        } else if (adjustedValue < currentTotal) {
          // If decreasing, remove from new properties first, then existing
          const newDiff = Math.min(newRentalCount, currentTotal - adjustedValue);
          const remainingDiff = (currentTotal - adjustedValue) - newDiff;
          
          setNewRentalCount(Math.max(0, newRentalCount - newDiff));
          setExistingRentalCount(Math.max(0, existingRentalCount - remainingDiff));
        }
      }
    }
    
    // Recalculate price
    setTimeout(() => {
      const newPrice = calculatePrice();
      setEstimatedPrice(newPrice);
    }, 0);
  };

  // Handle first year toggle change
  const handleFirstYearChange = (checked: boolean) => {
    setIsFirstYear(checked);
    
    if (checked) {
      // If first year client is selected, we adjust the counter
      // to be the total number of properties
      const totalProperties = optionCounters["rental"] || 1;
      setNewRentalCount(0);
      setExistingRentalCount(0);
    } else {
      // If returning client is selected, initialize existing vs new properties
      const totalProperties = optionCounters["rental"] || 1;
      setExistingRentalCount(totalProperties);
      setNewRentalCount(0);
    }
    
    // Recalculate price whenever this changes
    setTimeout(() => {
      const newPrice = calculatePrice();
      setEstimatedPrice(newPrice);
    }, 0);
  };
  
  // Handle existing rental count change
  const handleExistingRentalChange = (count: number) => {
    // Ensure we don't go below 0
    const newCount = Math.max(0, count);
    setExistingRentalCount(newCount);
    
    // Update total rental count in optionCounters
    const totalProperties = newCount + newRentalCount;
    setOptionCounters(prev => ({
      ...prev,
      "rental": Math.max(1, totalProperties)
    }));
    
    // Recalculate price
    setTimeout(() => {
      const newPrice = calculatePrice();
      setEstimatedPrice(newPrice);
    }, 0);
  };
  
  // Handle new rental count change
  const handleNewRentalChange = (count: number) => {
    // Ensure we don't go below 0
    const newCount = Math.max(0, count);
    setNewRentalCount(newCount);
    
    // Update total rental count in optionCounters
    const totalProperties = existingRentalCount + newCount;
    setOptionCounters(prev => ({
      ...prev,
      "rental": Math.max(1, totalProperties)
    }));
    
    // Recalculate price
    setTimeout(() => {
      const newPrice = calculatePrice();
      setEstimatedPrice(newPrice);
    }, 0);
  };
  
  // Reset the calculator
  const resetCalculator = () => {
    setReturnType(null);
    setSelectedOptions([]);
    setOptionCounters({});
    setIsFirstYear(true);
    setNewRentalCount(0);
    setExistingRentalCount(0);
    setEstimatedPrice(null);
  };

  return (
    <Dialog open={open} onOpenChange={(value) => {
      if (!value) resetCalculator();
      onOpenChange(value);
    }}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Tax Return Price Calculator</DialogTitle>
          <DialogDescription className="text-center text-lg">
            Estimate the cost of your tax preparation
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
        
          {/* Step 1: Select return type */}
          <div className="mb-8">
            <h3 className="font-medium mb-4 text-lg">What type of tax return do you need?</h3>
            <RadioGroup
              value={returnType || ""}
              onValueChange={(value) => handleReturnTypeChange(value as "individual" | "business")}
              className="flex flex-col space-y-3"
            >
              <div className="flex items-center space-x-3 rounded-md border p-4">
                <RadioGroupItem value="individual" id="individual" />
                <Label htmlFor="individual" className="flex-1 cursor-pointer">
                  <div className="font-medium">Individual Tax Return</div>
                  <div className="text-sm text-muted-foreground">
                    Personal tax returns for individuals and families
                  </div>
                </Label>
                <div className="font-medium">${pricingData.basePrice.individual}</div>
              </div>

              <div className="flex items-center space-x-3 rounded-md border p-4">
                <RadioGroupItem value="business" id="business" />
                <Label htmlFor="business" className="flex-1 cursor-pointer">
                  <div className="font-medium">Business Tax Return</div>
                  <div className="text-sm text-muted-foreground">
                    Tax returns for businesses of all sizes
                  </div>
                </Label>
                <div className="font-medium">${pricingData.basePrice.business}</div>
              </div>
            </RadioGroup>
          </div>

          {/* Step 2: Select additional options if a return type is selected */}
          {returnType && (
            <div className="mb-8">
              <h3 className="font-medium mb-4 text-lg">Select all that apply to your situation:</h3>
              <div className="grid gap-4 sm:grid-cols-1">
                {pricingData.additionalOptions[returnType].map((option) => (
                  <Card key={option.id} className="p-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id={option.id}
                        checked={selectedOptions.includes(option.id)}
                        onCheckedChange={(checked) => 
                          handleOptionChange(option.id, checked === true)
                        }
                      />
                      <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                        <div className="font-medium">{option.label}</div>
                        {option.description && (
                          <div className="text-sm text-muted-foreground">{option.description}</div>
                        )}
                      </Label>
                      {(option as PricingOption).isCounter ? (
                        <div className="text-right font-medium">
                          {option.id === "rental" ? (
                            <>+${(isFirstYear ? 90 : 45) * (optionCounters[option.id] || 1)}</>
                          ) : (
                            <>+${((option as PricingOption).counterPrice || option.price) * (optionCounters[option.id] || 1)}</>
                          )}
                        </div>
                      ) : (
                        <div className="font-medium">+${option.price}</div>
                      )}
                    </div>
                    
                    {/* Counter interface for rental properties or other counted items */}
                    {(option as PricingOption).isCounter && selectedOptions.includes(option.id) && (
                      <div className="mt-4 pl-9">
                        {option.id === "rental" ? (
                          <div>
                            <p className="text-sm font-medium mb-2">Total Rental Properties: {optionCounters[option.id] || 1}</p>
                            <p className="text-sm mb-1">Click below to provide details about your rental properties:</p>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-3">
                            {(option as PricingOption).counterLabel && (
                              <Label className="text-sm">{(option as PricingOption).counterLabel}</Label>
                            )}
                            <div className="flex items-center border rounded-md">
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0"
                                onClick={() => handleCounterChange(option.id, (optionCounters[option.id] || 1) - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <Input
                                type="number"
                                min="1"
                                value={optionCounters[option.id] || 1}
                                onChange={(e) => handleCounterChange(option.id, parseInt(e.target.value) || 1)}
                                className="h-8 w-16 text-center border-0"
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0"
                                onClick={() => handleCounterChange(option.id, (optionCounters[option.id] || 1) + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              ${(option as PricingOption).counterPrice || option.price} {(option as PricingOption).counterDescription}
                            </div>
                          </div>
                        )}
                        
                        {/* First year toggle and property counters for rental properties */}
                        {option.id === "rental" && (
                          <div className="mt-4 border-t pt-4">
                            <div className="flex items-center space-x-3">
                              <Checkbox 
                                id="first-year-rental" 
                                checked={isFirstYear} 
                                onCheckedChange={(checked) => handleFirstYearChange(checked === true)}
                              />
                              <Label htmlFor="first-year-rental" className="flex-1 cursor-pointer">
                                <div className="font-medium">First-year customer</div>
                                <div className="text-sm text-muted-foreground">
                                  Check this if this is your first tax return with us
                                </div>
                              </Label>
                            </div>
                            
                            {isFirstYear ? (
                              // First year client interface - all properties are $90
                              <div className="mt-3 p-3 border rounded-md bg-slate-50">
                                <div className="mb-3">
                                  <p className="text-sm font-medium mb-2">First-Year Properties ($90 each)</p>
                                  <div className="flex items-center space-x-3">
                                    <Label className="text-sm">Number of properties:</Label>
                                    <div className="flex items-center border rounded-md">
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 w-8 p-0"
                                        onClick={() => handleCounterChange("rental", Math.max(1, (optionCounters["rental"] || 1) - 1))}
                                      >
                                        <Minus className="h-4 w-4" />
                                      </Button>
                                      <Input
                                        type="number"
                                        min="1"
                                        value={optionCounters["rental"] || 1}
                                        onChange={(e) => handleCounterChange("rental", parseInt(e.target.value) || 1)}
                                        className="h-8 w-16 text-center border-0"
                                      />
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 w-8 p-0"
                                        onClick={() => handleCounterChange("rental", (optionCounters["rental"] || 1) + 1)}
                                      >
                                        <Plus className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-sm text-amber-600 bg-amber-50 p-2 rounded mb-3">
                                  First-year clients pay $90 per property ($45 base + $45 depreciation schedule setup). 
                                  Your cost will drop to $45 per property next year.
                                </div>
                              </div>
                            ) : (
                              // Returning client interface - separate existing and new properties
                              <div className="mt-3 p-3 border rounded-md bg-slate-50">
                                <div className="mb-3">
                                  <p className="text-sm font-medium mb-2">Existing Properties ($45 each)</p>
                                  <div className="flex items-center space-x-3">
                                    <Label className="text-sm">Number of existing properties:</Label>
                                    <div className="flex items-center border rounded-md">
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 w-8 p-0"
                                        onClick={() => handleExistingRentalChange(existingRentalCount - 1)}
                                      >
                                        <Minus className="h-4 w-4" />
                                      </Button>
                                      <Input
                                        type="number"
                                        min="0"
                                        value={existingRentalCount}
                                        onChange={(e) => handleExistingRentalChange(parseInt(e.target.value) || 0)}
                                        className="h-8 w-16 text-center border-0"
                                      />
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 w-8 p-0"
                                        onClick={() => handleExistingRentalChange(existingRentalCount + 1)}
                                      >
                                        <Plus className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="mb-2">
                                  <p className="text-sm font-medium mb-2">New Properties ($90 each)</p>
                                  <div className="flex items-center space-x-3">
                                    <Label className="text-sm">Number of new properties:</Label>
                                    <div className="flex items-center border rounded-md">
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 w-8 p-0"
                                        onClick={() => handleNewRentalChange(newRentalCount - 1)}
                                      >
                                        <Minus className="h-4 w-4" />
                                      </Button>
                                      <Input
                                        type="number"
                                        min="0"
                                        value={newRentalCount}
                                        onChange={(e) => handleNewRentalChange(parseInt(e.target.value) || 0)}
                                        className="h-8 w-16 text-center border-0"
                                      />
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="h-8 w-8 p-0"
                                        onClick={() => handleNewRentalChange(newRentalCount + 1)}
                                      >
                                        <Plus className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="text-sm text-amber-600 bg-amber-50 p-2 rounded">
                                  New properties require a $45 setup fee for depreciation schedules, for a total of $90 per new property.
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Estimated price */}
          {estimatedPrice !== null && (
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold mb-2">Your Estimated Price</h3>
              <div className="text-4xl font-bold text-primary">${estimatedPrice}</div>
              
              {/* Show detailed breakdown for rental properties */}
              {returnType && selectedOptions.includes("rental") && (
                <div className="mt-4 mx-auto max-w-md text-left bg-slate-50 p-3 rounded-md border">
                  <h4 className="font-medium text-center mb-2">Price Breakdown</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Base {returnType} return:</span>
                      <span>${pricingData.basePrice[returnType]}</span>
                    </div>
                    
                    {/* Rental property breakdown */}
                    <div className="pt-1">
                      <div className="font-medium">Rental Properties:</div>
                      {isFirstYear ? (
                        <div className="flex justify-between pl-2">
                          <span>{optionCounters["rental"] || 1} properties × $90:</span>
                          <span>+${(optionCounters["rental"] || 1) * 90}</span>
                        </div>
                      ) : (
                        <>
                          {existingRentalCount > 0 && (
                            <div className="flex justify-between pl-2">
                              <span>{existingRentalCount} existing properties × $45:</span>
                              <span>+${existingRentalCount * 45}</span>
                            </div>
                          )}
                          {newRentalCount > 0 && (
                            <div className="flex justify-between pl-2">
                              <span>{newRentalCount} new properties × $90:</span>
                              <span>+${newRentalCount * 90}</span>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    
                    {/* Other selected options */}
                    {selectedOptions
                      .filter(id => id !== "rental")
                      .map(optionId => {
                        const option = pricingData.additionalOptions[returnType].find(opt => opt.id === optionId);
                        if (!option) return null;
                        
                        return (
                          <div key={optionId} className="flex justify-between">
                            <span>{option.label}:</span>
                            <span>+${(option as PricingOption).isCounter ? ((option as PricingOption).counterPrice || option.price) * (optionCounters[optionId] || 1) : option.price}</span>
                          </div>
                        );
                      })}
                    
                    {/* Total line with border */}
                    <div className="flex justify-between font-medium pt-2 mt-1 border-t">
                      <span>Total Estimated Price:</span>
                      <span>${estimatedPrice}</span>
                    </div>
                  </div>
                </div>
              )}
              
              <p className="mt-3 text-sm text-muted-foreground">
                This is an estimate. Final price may vary based on the complexity of your specific situation.
              </p>
            </div>
          )}
        </div>

        <DialogFooter className="flex justify-between sm:justify-between">
          <Button variant="outline" onClick={resetCalculator}>
            Reset
          </Button>
          <Button onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}