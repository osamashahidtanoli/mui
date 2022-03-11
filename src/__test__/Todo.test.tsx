import React from 'react';
import { render, screen, fireEvent, waitFor } from '../testing-utils';
import Todo from '../components/Todo';
import '@testing-library/jest-dom';



describe('App Component', ()=> {

  test('loads todo Initially', async () => {
    render(<Todo/>);
    expect(await screen.findByText('Todo 1')).toBeInTheDocument();
  })
  
  it('after adding a todo the value of input gets cleared and todo is added', async() => {
    render(<Todo />);
    const inputElement = screen.getByPlaceholderText('Add Item') as HTMLInputElement;
    const submitBtn = screen.getByRole('button', {name: 'Add Task'});
    expect(inputElement.value).toBe('');
    fireEvent.change(inputElement, {target: {value: 'Todo 1'}})
    expect(inputElement.value).toBe('Todo 1');
    fireEvent.click(submitBtn);
    expect(inputElement.value).toBe('');
    expect(screen.getByText('Successfully Added')).toBeInTheDocument();
    
  });

  it('when value is empty error shows up', async() => {
    render(<Todo />);
    const inputElement = screen.getByPlaceholderText('Add Item') as HTMLInputElement;
    const submitBtn = screen.getByRole('button', {name: 'Add Task'});
    expect(inputElement.value).toBe('');
    fireEvent.change(inputElement, {target: {value: ''}})
    expect(inputElement.value).toBe('');
    fireEvent.click(submitBtn);
    expect(inputElement.value).toBe('');
    expect(screen.getByText('Task Name Required')).toBeInTheDocument();
  });
  
})

