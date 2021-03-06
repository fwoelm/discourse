
// Creates a link
function link(buffer, prop, url, cssClass, i18nKey, text) {
  if (!prop) { return; }

  var title = I18n.t("topic." + i18nKey, {count: prop});
  buffer.push("<a href='" + url + "' class='badge " + cssClass + " badge-notification' title='" + title + "'>" + (text || prop) + "</a>\n");
}

export default Ember.Component.extend({
  tagName: 'span',
  classNameBindings: [':topic-post-badges'],
  _shouldRerender: Discourse.View.renderIfChanged('url', 'unread', 'newPosts', 'unseen'),

  render: function(buffer) {
    var url = this.get('url');

    link(buffer, this.get('unread'), url, 'unread', 'unread_posts');
    link(buffer, this.get('newPosts'), url, 'new-posts', 'new_posts');
    link(buffer, this.get('unseen'), url, 'new-topic', 'new', I18n.t('filters.new.lower_title'));
  }
});
