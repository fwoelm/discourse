integration("Unknown");

test("Unknown URL", function() {
  expect(1);
  visit("/url-that-doesn't-exist");
  andThen(function() {
    ok(exists(".page-not-found"), "The not found content is present");
  });
});
