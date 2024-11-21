import React, { useEffect, useState } from 'react';
import { DateInput, AmountInput, TitleInput, CategoryInput, PaymentModeInput, RecurringInput, BeneficiaryInput, TagsInput } from './Inputs';

const EmptyExpense = {
  date: new Date().toISOString().split('T')[0],
  amount: '',
  title: '',
  category: '',
  newCategory: '',
  paymentMode: 'Cash',
  recurring: false,
  beneficiary: 'Self',
  tags: '',
};

const ExpenseForm = ({ onSaveExpense, editIndex }) => {
  const expensesDataString = localStorage.getItem('expenses_data_key') || '[]';
  const expenses = JSON.parse(expensesDataString);
  const prefilledExpense = editIndex > -1 ? expenses[editIndex] : EmptyExpense;
  const [date, setDate] = useState(prefilledExpense.date);
  const [amount, setAmount] = useState(prefilledExpense.amount);
  const [title, setTitle] = useState(prefilledExpense.title);
  const [category, setCategory] = useState(prefilledExpense.category);
  const [newCategory, setNewCategory] = useState(prefilledExpense.newCategory);
  const [paymentMode, setPaymentMode] = useState(prefilledExpense.paymentMode);
  const [recurring, setRecurring] = useState(prefilledExpense.recurring);
  const [beneficiary, setBeneficiary] = useState(prefilledExpense.beneficiary);
  const [tags, setTags] = useState(prefilledExpense.tags);

  useEffect(() => {
    if (editIndex > -1) {
      setDate(prefilledExpense.date);
      setAmount(prefilledExpense.amount);
      setTitle(prefilledExpense.title);
      setCategory(prefilledExpense.category);
      setNewCategory('');
      setPaymentMode(prefilledExpense.paymentMode);
      setRecurring(prefilledExpense.recurring);
      setBeneficiary(prefilledExpense.beneficiary);
      setTags(prefilledExpense.tags);
    }
  }, [editIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalCategory = category || newCategory;
    onSaveExpense({ date, amount: +amount, title, category: finalCategory, paymentMode, recurring, beneficiary, tags: tags?.split(',') }, editIndex);

    setDate(EmptyExpense.date);
    setAmount(EmptyExpense.amount);
    setTitle(EmptyExpense.title);
    setCategory(EmptyExpense.category);
    setNewCategory(EmptyExpense.newCategory);
    setPaymentMode(EmptyExpense.paymentMode);
    setRecurring(EmptyExpense.recurring);
    setBeneficiary(EmptyExpense.beneficiary);
    setTags(EmptyExpense.tags);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DateInput value={date} onChange={setDate} />
      <AmountInput value={amount} onChange={setAmount} />
      <TitleInput value={title} onChange={setTitle} />
      <CategoryInput selectedCategory={category} onChange={setCategory} newCategory={newCategory} onNewCategoryChange={setNewCategory} />
      <PaymentModeInput selectedMode={paymentMode} onChange={setPaymentMode} />
      <RecurringInput value={recurring} onChange={setRecurring} />
      <BeneficiaryInput selectedBeneficiary={beneficiary} onChange={setBeneficiary} />
      <TagsInput value={tags} onChange={setTags} />
      { editIndex > -1 ? (<button type="submit">Edit Expense</button>) : (<button type="submit">Add Expense</button>) }
    </form>
  );
};

export default ExpenseForm;