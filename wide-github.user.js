(function () {
  "use strict";

  if (document.getElementById('js-repo-pjax-container')) {
    var s = document.createElement('style');
    s.type = "text/css";
    s.innerHTML = ".container {" +
        "width:90% !important;" +
        "min-width:980px;" +
      "}" +
      ".repository-content {" +
        "width:100% !important;" +
        "margin-right: auto !important;" +
      "}" +

      // Repository sidebar
      ".repository-with-sidebar {" +
        "margin-left:60px;" +
      "}" +
      ".repository-with-sidebar.with-full-navigation {" +
        "margin-left:190px;" +
      "}" +
      ".repository-with-sidebar .repository-content {" +
        "margin-left:-60px;" +
      "}" +
      ".repository-with-sidebar.with-full-navigation .repository-content {" +
        "margin-left:-190px;" +
      "}" +

      // Repository sidebar (with .split-diff)
      ".split-diff .repository-with-sidebar {" +
        "padding-right:0px !important;" +
      "}" +
      ".split-diff .repository-with-sidebar .repository-sidebar {" +
        "margin-right:0px !important;" +
      "}" +

      // Repository Issues
      ".repository-content .discussion-timeline {" + // Issue body
        "margin-right:-160px;" +
        "padding-right:160px;" +
        "width:95% !important;" +
      "}" +
      ".repository-content .discussion-timeline .timeline-new-comment {" + // New Issue / issue comment form
        "max-width:100% !important;" +
      "}" +
      ".repository-content .inline-comments .comment-holder {" + // Diff / code comments
        "max-width:none !important;" +
      "}" +
      ".repository-content .inline-comments .inline-comment-form-container {" +
        "max-width:none !important;" +
      "}" +
      ".repository-content .inline-comments .inline-comment-form {" +
        "max-width:none !important;" +
      "}" +

      // Repository pulse page
      ".repository-content .boxed-group-inner .summary-stats {" + // Overview PR / Issue counts
        "display:table;" +
        "width:100%;" +
      "}" +
      ".repository-content .boxed-group-inner .summary-stats li {" +
        "width:25% !important;" +
      "}" +
      ".repository-content .authors-and-code .section {" + // Contributors bar graph
        "width:50%;" +
      "}" +
      ".repository-content .authors-and-code .section svg {" +
        "width:100%;" +
      "}" +

      // Repository graph page
      ".repository-content .capped-card {" + // Graph cards on contributors / graph list
        "margin:10px 10px 0 0 !important;" +
      "}" +
      ".repository-content .traffic-graph-stats .summary-stats {" + // Traffic view / visitor count
        "display:table;" +
        "width:100%;" +
      "}" +
      ".repository-content .traffic-graph-stats .summary-stats li {" +
        "width:50% !important;" +
      "}" +
      "";
    (document.head || document.documentElement).appendChild(s);
  }

})();
