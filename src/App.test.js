import { render, screen } from '@testing-library/react';
import App from './App';
import dataTesting from './testData.json';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('component is rendred', () => {
  render(<App />);
    const container = screen.getByTestId("test-container");
    console.log(container);
  expect(container).toBeInTheDocument();
  
});


test('Test if image is same as given', () => {
  render(<App />);
    const image = screen.getByTestId("img-pic");
    console.log(image);
  expect(image.src).toEqual(dataTesting.url);
});

test('Test if title is same as given', () => {
  render(<App />);
    const title = screen.getByTestId("title-test");
    console.log(title);
  expect(title.textContent).toEqual(dataTesting.title);
});

test('Test if subtitle is same as given', () => {
  render(<App />);
    const subTitle = screen.getByTestId("subtitle-test");
    console.log(subTitle);
  expect(subTitle.textContent).toEqual(dataTesting.subtitle);
});
