/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import GenericType from '../api/generictype/generictype.model';
import Project from '../api/project/project.model';

GenericType.find({}).removeAsync()
  .then(function() {
    GenericType.create(
    // Request Types
    {
      name: 'Service Request',
      description: 'Defines a service request (build me a new web page) from a new/existing customer.',
      tag: 'request_type',
      display_order: 1
    },
    {
      name: 'Request For Information',
      description: 'Defines a request for information (i.e. Have widget; How much is it going to cost) from a new/existing customer.',
      tag: 'request_type',
      display_order: 2
    },
    {
      name: 'Incident',
      description: 'Defines an Incident from a new/existing customer.',
      tag: 'request_type',
      display_order: 3
    },
    {
      name: 'Change Request',
      description: 'Defines a Change Request for an existing project from an existing customer.',
      tag: 'request_type',
      display_order: 4
    },
    // Modes
    {
      name: 'Email',
      description: 'Type email',
      tag: 'mode',
      display_order: 1
    },
    {
      name: 'Phone Call',
      description: 'Type phone call',
      tag: 'mode',
      display_order: 2
    },
    {
      name: 'Web',
      description: 'Type web',
      tag: 'mode',
      display_order: 3
    }, 
    // Urgency
    {
      name: 'High',
      description: '',
      tag: 'urgency',
      display_order: 1
    },
    {
      name: 'Normal',
      description: '',
      tag: 'urgency',
      display_order: 2
    },
    {
      name: 'Low',
      description: '',
      tag: 'urgency',
      display_order: 3
    },
    {
      name: 'Critical',
      description: '',
      tag: 'urgency',
      display_order: 4
    },
    // Impacts
    {
      name: 'Affects Business',
      description: '',
      tag: 'impact',
      display_order: 1
    },
    {
      name: 'Affects Department',
      description: '',
      tag: 'impact',
      display_order: 2
    },
    {
      name: 'Affects Group',
      description: '',
      tag: 'impact',
      display_order: 3
    },
    {
      name: 'Affects User',
      description: '',
      tag: 'impact',
      display_order: 4
    },
    {
      name: 'Affects System',
      description: '',
      tag: 'impact',
      display_order: 5
    },
    // Priority
    {
      name: 'High',
      description: '',
      tag: 'priority',
      display_order: 2
    },
    {
      name: 'Normal',
      description: '',
      tag: 'priority',
      display_order: 1
    },
    {
      name: 'Medium',
      description: '',
      tag: 'priority',
      display_order: 3
    },
    {
      name: 'Low',
      description: '',
      tag: 'priority',
      display_order: 4
    },
    // Category
    {
      name: 'Desktop Hardware',
      description: '',
      tag: 'category',
      display_order: 1
    },
    {
      name: 'Internet',
      description: '',
      tag: 'category',
      display_order: 2
    },
    {
      name: 'Network',
      description: '',
      tag: 'category',
      display_order: 3
    },
    {
      name: 'Operating System',
      description: '',
      tag: 'category',
      display_order: 4
    },
    {
      name: 'Printers',
      description: '',
      tag: 'category',
      display_order: 5
    },
      {
      name: 'Desktop Hardware',
      description: '',
      tag: 'category',
      display_order: 6
    },
    {
      name: 'Routers',
      description: '',
      tag: 'category',
      display_order: 7
    },
    {
      name: 'Services',
      description: '',
      tag: 'category',
      display_order: 8
    },
    {
      name: 'Software - Packaged',
      description: '',
      tag: 'category',
      display_order: 9
    },
    {
      name: 'Software - Custom',
      description: '',
      tag: 'category',
      display_order: 10
    },
    {
      name: 'Switches',
      description: '',
      tag: 'category',
      display_order: 11
    },
    {
      name: 'Telephone',
      description: '',
      tag: 'category',
      display_order: 12
    },
    {
      name: 'User Administration',
      description: '',
      tag: 'category',
      display_order: 10
    },
    // Departments
    {
      name: 'Human Resources',
      description: '',
      tag: 'department',
      display_order: 1
    },
    {
      name: 'Development',
      description: '',
      tag: 'department',
      display_order: 2
    },
    {
      name: 'Design',
      description: '',
      tag: 'department',
      display_order: 3
    },
    {
      name: 'Executive',
      description: '',
      tag: 'department',
      display_order: 4
    },
    {
      name: 'Information Systems',
      description: '',
      tag: 'department',
      display_order: 5
    }
    );
  });

Project.find({}).removeAsync()
  .then(function() {
    Project.create({
      name: 'Test Project 1',
      description: 'Test description'
    }, {
      name: 'Test Project 2',
      description: 'test description 2'
    }, {
      name: 'Test Project 3',
      description: 'test description 3'
    });
  });



Thing.find({}).removeAsync()
  .then(function() {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

