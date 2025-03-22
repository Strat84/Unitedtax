export default function TrustStats() {
  return (
    <section className="py-12 bg-primary-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold mb-2">10,000+</div>
            <p className="text-primary-100">Happy Customers</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold mb-2">$15M+</div>
            <p className="text-primary-100">In Tax Deductions Found</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold mb-2">99.7%</div>
            <p className="text-primary-100">On-Time Filing Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
