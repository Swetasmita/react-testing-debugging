import data from "../../data/courses.json"

const numItems = data.length;
const dataTest = data[0].title;

//use describe to block the test cases all together/create test suites
//Numbers
describe('Number test', () =>{
test('Number of items', () => {
  expect( numItems).toBe(12);
});

test("Number of items to be greater than or equal to 12", () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});
})

//string testing block
describe('String test', () =>{
  test('There is JS in the title', () => {
  expect( dataTest).toMatch(/JS/);
});
test('The title contains React', () => {
  expect( dataTest).toContain('React');
});
})

//Arrays and objects testing blocks
 const data2 = ["React native", "React"];
describe('Array and Objects tests', () =>{
//Array
 test('The title contains React', () => {
  expect(["React native", "React", "JavaScript"]).toEqual(expect.arrayContaining(data2));
});
//Objects
 test('The first course to have a property called title', () => {
  expect(data[0]).toHaveProperty('title');
 });
 test('The first course to have properties called views and value of 31,266', () => {
  expect(data[0]).toHaveProperty('views', '31,266');
 });
});

 /* data is importing from courses.json */