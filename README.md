# Rails Assessment Application

This application is meant to be a flexible system to store notes and links on any topic whatever, collate that data into an easily searchable format, and be able to handle a wide variety of datatypes in a natural way.

It is an AngularJS application with a Ruby on Rails backend.

Required Environment / Minimum Setup
----------------------------------------------

This was created with Ruby 2.3.0, Rails 5.0.0.1, and AngularJS 1.5

Running this application would require a machine/browser capable of handling these frameworks.

Accessing the Site
----------------------------------------------

To see it work you need to clone the repo, cd into the directory, run `rake db:migrate`, and then `rails s`. The site should be listening on your localhost at some port rails provides you (likely 3000).

Known Issues 
----------------------------------------------

Searching, though fast, cannot convert between different encodings. So the Cyrillic alphabet reading of "Модест", for instance, cannot be accessed by typing in the latin transliteration "Modest". Latinize libraries have so far not helped.
