describe("isIsomorphic", () => {
  test('test1', () => {
    expect(isIsomorphic('egg', 'add')).toBe(true);
  });

  test("test2", () => {
    expect(isIsomorphic("foo", "bar")).toBe(false);
  });

  test("test3", () => {
    expect(isIsomorphic("paper", "title")).toBe(true);
  });

  test("test4", () => {
    expect(isIsomorphic("a", "b")).toBe(true);
  });

  test("test5", () => {
    expect(isIsomorphic("foo", "lll")).toBe(false);
  });

  test("test6", () => {
    expect(isIsomorphic("foo", "foo")).toBe(true);
  });
});
