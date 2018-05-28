import DS from 'ember-data';

export default DS.Model.extend({
  FirstName: DS.attr('string'),
  Surname: DS.attr('string'),
  PhoneNumber: DS.attr('string'),
  MobileNumber: DS.attr('string'),
});
