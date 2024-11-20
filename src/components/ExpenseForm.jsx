import React, { useEffect, useState } from 'react';
import { DateInput, AmountInput, TitleInput, CategoryInput, PaymentModeInput, RecurringInput, BeneficiaryInput, TagsInput } from './Inputs';

const ExpenseForm = ({ onSaveExpense, editIndex, prefilledExpense }) => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [paymentMode, setPaymentMode] = useState('Cash');
  const [recurring, setRecurring] = useState(false);
  const [beneficiary, setBeneficiary] = useState('Self');
  const [tags, setTags] = useState('');

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
    onSaveExpense({ date, amount: +amount, title, category: finalCategory, paymentMode, recurring, beneficiary, tags: tags.split(',') }, editIndex);
    setDate(new Date().toISOString().split('T')[0]);
    setAmount('');
    setTitle('');
    setCategory('');
    setNewCategory('');
    setPaymentMode('Cash');
    setRecurring(false);
    setBeneficiary('Self');
    setTags('');
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