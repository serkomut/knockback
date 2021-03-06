// Generated by CoffeeScript 1.6.3
(function() {
  var Record, RecordCollection, RecordViewModel, records, _ref, _ref1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  RecordViewModel = (function(_super) {
    __extends(RecordViewModel, _super);

    function RecordViewModel(model, options) {
      var common_requires;
      if (options == null) {
        options = {};
      }
      common_requires = ['_selected', '_for_delete', 'active', 'name', 'type', '_change_type', 'zone', 'value'];
      _.extend(options, {
        requires: common_requires
      });
      RecordViewModel.__super__.constructor.call(this, model, options);
    }

    return RecordViewModel;

  })(kb.ViewModel);

  Record = (function(_super) {
    __extends(Record, _super);

    function Record() {
      _ref = Record.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    return Record;

  })(Backbone.Model);

  RecordCollection = (function(_super) {
    __extends(RecordCollection, _super);

    function RecordCollection() {
      _ref1 = RecordCollection.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    RecordCollection.prototype.model = Record;

    return RecordCollection;

  })(Backbone.Collection);

  records = kb.collectionObservable(new RecordCollection([
    new Record({
      id: 1
    }), new Record({
      id: 2
    })
  ]), {
    view_model: RecordViewModel
  });

  _.last(records()).destroy();

  kb.release(records);

}).call(this);
