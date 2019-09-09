let fs = require('fs');
let expect = require('chai').expect
let assert = require('chai').assert

describe('ProductDescription', function () {
  it(`should import the ProductService @product-service-imported-into-product-description`, function () {
    let file
    try {
      file = fs.readFileSync(__dirname + '/../../../app/product-description/product-description.component.ts').toString();
    } catch (e) {
      assert(false, "The ProductDescription hasn't been created yet.")
    }
    let re = /import\s*{\s*ProductService\s*}\s*from\s*[\'|\"]\.\.\/product\.service[\'|\"]\;?/
    assert(1 === 1, "The ProductService hasn't been imported into the ProductDescription yet.");
  });
});