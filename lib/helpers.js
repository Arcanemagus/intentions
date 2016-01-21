'use babel'

export function processSuggestions(suggestions) {
  const suggestionsLength = suggestions.length
  for (let i = 0; i < suggestionsLength; ++i) {
    const suggestion = suggestions[i]
    suggestion.class = (suggestion.class || '') + (suggestion.icon ? ' icon icon-' + suggestion.icon : '')
  }
  return suggestions
}

export function sortSuggestions(suggestions) {
  return suggestions.sort(function(a, b) {
    return b.priority - a.priority
  })
}

export function showError(message, detail = null) {
  if (message instanceof Error) {
    detail = message.stack
    message = message.message
  }
  atom.notifications.addError(`[Intentions] ${message}`, {
    detail: detail,
    dismissable: true
  })
}