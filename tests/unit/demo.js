define([
  'intern!object',
  'intern/chai!assert'
], function (registerSuite, assert) {

  registerSuite({

		'passing sync test': function () {},

    'failing sync test': function () {
      throw new Error('Oops');
    },

		'passing promise async test': function() {

			return new Promise(function(resolve, reject) {

				setTimeout(function() {
					resolve();
				}, 2000);

			});

		},

		'failing promise async test': function() {

			return new Promise(function(resolve, reject) {

				setTimeout(function() {
					reject();
				}, 2000);

			});

		},

		'passing non-promise async test': function() {

			var dfd = this.async(5000);

			setTimeout(dfd.callback(function() {
				
			}), 2000);

		},

		'failing non-promise async test': function() {

			var dfd = this.async(5000);

			setTimeout(dfd.callback(function() {
				throw new Error('Oops');
			}), 2000);

		}

  });

});
