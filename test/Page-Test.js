require('./testdom')('<html><body></body></html>');

var React      = require('react-dom');
var chai       = require('chai');
var expect     = chai.expect;
var sinon      = require('sinon');
var proxyquire = require('proxyquire');
var reactStub  = require('./reactStub');

chai.use(require('sinon-chai'));

describe('Page', function () {

	beforeEach(function() {
    // React = require('react-dom');
    // TestUtils = React.addons.TestUtils;

		// moment = sinon.stub().returns({
		// 	format: sinon.spy()
		// });

		// Page = proxyquire(process.cwd() + 'public/src/components/app.js', {
		// 	'./Header': reactStub
		// });

  //   element = TestUtils.renderIntoDocument(
  //     <Page />
  //   );
	});

  it('should make first test', function () {
    expect("hello").to.eql('hello');
  });

	it('should evaluate var', function () {
		var x = 'abc'
		expect(x).to.equal('abc');
	});
});
