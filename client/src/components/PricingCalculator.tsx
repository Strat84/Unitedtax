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

interface PricingOption {
  id: string;
  label: string;
  price: number;
  description?: string;
}

// Pricing data structure
const pricingData = {
  basePrice: {
    individual: 199,
    business: 499,
  },
  additionalOptions: {
    individual: [
      { id: "w2", label: "W-2 Income", price: 25, description: "Income from employment" },
      { id: "1099", label: "1099 Income", price: 50, description: "Independent contractor/freelance income" },
      { id: "investments", label: "Investment Income", price: 75, description: "Stocks, bonds, dividends, etc." },
      { id: "crypto", label: "Cryptocurrency", price: 100, description: "Trading or mining cryptocurrency" },
      { id: "rental", label: "Rental Property", price: 150, description: "Income from rental properties" },
      { id: "foreign", label: "Foreign Income", price: 200, description: "Income from foreign sources" },
      { id: "rsu", label: "RSUs/Stock Options", price: 175, description: "Restricted stock units or stock options" },
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
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  // Calculate the price based on selections
  const calculatePrice = () => {
    if (!returnType) return null;
    
    const base = pricingData.basePrice[returnType];
    const additionalCosts = selectedOptions.reduce((total, optionId) => {
      const option = pricingData.additionalOptions[returnType].find(opt => opt.id === optionId);
      return total + (option?.price || 0);
    }, 0);
    
    return base + additionalCosts;
  };

  // Handle return type selection
  const handleReturnTypeChange = (value: "individual" | "business") => {
    setReturnType(value);
    setSelectedOptions([]);
    const newPrice = pricingData.basePrice[value];
    setEstimatedPrice(newPrice);
  };

  // Handle option selection
  const handleOptionChange = (optionId: string, checked: boolean) => {
    let newOptions;
    if (checked) {
      newOptions = [...selectedOptions, optionId];
    } else {
      newOptions = selectedOptions.filter(id => id !== optionId);
    }
    setSelectedOptions(newOptions);
    
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
                      <div className="font-medium">+${option.price}</div>
                    </div>
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
              <p className="mt-2 text-sm text-muted-foreground">
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