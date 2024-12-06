import React from 'react';

export const DateInput = ({ value, onChange }) => {
  return (
    <div className="flex items-center justify-between space-x-4">
      <label className="text-sm font-medium text-gray-700 w-1/4">Date</label>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-3/4 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
        required
      />
    </div>
  );
};


export const AmountInput = ({ value, onChange }) => {
  return (
    <div className="flex items-center justify-between space-x-4">
      <label className="text-sm font-medium text-gray-700 w-1/4">Amount</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-3/4 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
        placeholder="Enter amount"
        required
      />
    </div>
  );
};


export const TitleInput = ({ value, onChange }) => {
  return (
    <div className="flex items-center space-x-4">
      <label className="text-sm font-medium text-gray-700 min-w-[100px]">Title</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
        placeholder="Expense title"
        required
      />
    </div>
  );
};


const categories = [
  "Entertainment", "Food", "Groceries", "Gift", "Apparel", "Self Care", "Donation", "Capital Expense", "Travel", "Repair", "Medical", "Miscellaneous", "Petrol"
];

export const CategoryInput = ({ selectedCategory, onChange, newCategory, onNewCategoryChange }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-4">
        <label className="text-sm font-medium text-gray-700 min-w-[100px]">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
        >
          <option value="" disabled>
            Select category
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {selectedCategory === "" && (
        <input
          type="text"
          value={newCategory}
          onChange={(e) => onNewCategoryChange(e.target.value)}
          className="mt-2 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          placeholder="Enter new category"
        />
      )}
    </div>
  );
};


export const PaymentModeInput = ({ selectedMode, onChange }) => {
  return (
    <div className="flex items-center space-x-4">
      <label className="text-sm font-medium text-gray-700 min-w-[100px]">
        Payment Mode
      </label>
      <select
        value={selectedMode}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
      >
        <option value="Cash">Cash</option>
        <option value="Card">Card</option>
        <option value="UPI">UPI</option>
        <option value="Others">Others</option>
      </select>
    </div>
  );
};


export const RecurringInput = ({ value, onChange }) => {
  return (
    <div className="flex items-center space-x-4">
      <label className="text-sm font-medium text-gray-700 min-w-[100px]">Recurring</label>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="rounded focus:ring-2 focus:ring-purple-500 transition duration-200"
        />
        <span className="ml-2 text-gray-700">Is this a recurring expense?</span>
      </div>
    </div>
  );
};

export const BeneficiaryInput = ({ selectedBeneficiary, onChange }) => {
  return (
    <div className="flex items-center space-x-4">
      <label className="text-sm font-medium text-gray-700 min-w-[100px]">
        Beneficiary
      </label>
      <select
        value={selectedBeneficiary}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
      >
        <option value="Self">Self</option>
        <option value="Family">Family</option>
        <option value="Friends">Friends</option>
      </select>
    </div>
  );
};


export const TagsInput = ({ value, onChange }) => {
  return (
    <div className="flex items-center space-x-4">
      <label className="text-sm font-medium text-gray-700 min-w-[100px]">Tags</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
        placeholder="Add tags separated by commas"
      />
    </div>
  );
};