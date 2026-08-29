import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: { kind: 'local' }, 
  collections: {
    events: collection({
      label: 'Upcoming Events',
      slugField: 'title',
      path: 'src/content/events/*', 
      
      // ADDED THIS: Forces Keystatic to output clean JSON instead of YAML
      format: { data: 'json' }, 
      
      schema: {
        title: fields.slug({ name: { label: 'Event Title' } }),
        date: fields.date({ label: 'Event Date' }),
        hoursFrom: fields.text({ label: 'Starts At (e.g., 9:00 AM)' }),
        hoursTo: fields.text({ label: 'Ends At (e.g., 5:00 PM)' }), 
        locationName: fields.text({ label: 'Location Name' }),
        mapUrl: fields.url({ label: 'Google Maps Link' }),
        description: fields.text({ label: 'Short Description', multiline: true }),
      }
    })
  }
});