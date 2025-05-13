<form onSubmit={handleSubmit} className="w-full space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-sm bg-gray-900/50">
  {status === 'success' && (
    <div className="bg-green-500/10 text-green-500 p-3 sm:p-4 rounded-xl text-sm sm:text-base">
      Thank you for your RSVP!
    </div>
  )}
  {status === 'error' && (
    <div className="bg-red-500/10 text-red-500 p-3 sm:p-4 rounded-xl text-sm sm:text-base">
      There was an error submitting your RSVP. Please try again.
    </div>
  )}
  
  <div className="space-y-1 sm:space-y-2">
    <label htmlFor="name" className="block text-base sm:text-lg font-medium text-white">Name</label>
    <input
      type="text"
      id="name"
      required
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-gray-900 text-white border border-gray-700 
               focus:ring-2 focus:ring-red-500/50 focus:border-transparent 
               placeholder-gray-400 transition-all duration-200 text-sm sm:text-base"
      placeholder="Your name"
    />
  </div>

  {/* Update other form fields similarly */}
</form>