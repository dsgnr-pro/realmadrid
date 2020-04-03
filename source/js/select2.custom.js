//Select2
(function () {
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = "../img/teams";
    var $state = $(
      '<span class="img-flag"><img src="' + baseUrl + '/' + 'team-2' + '.svg" class="img-flag" /> ' + state.text + '</span>'
    );
    return $state;
  };

  $(".select").select2({
    minimumResultsForSearch: -1
  });

  $(".select--match").select2({
    minimumResultsForSearch: -1,
    placeholder: '12321312',
    templateResult: formatState
  });


})();
