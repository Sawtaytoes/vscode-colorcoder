import debounce from 'just-debounce'
import vscode from 'vscode'

import {
  colorize,
  removePreviousTextEditorDecorations,
} from './colorize'

const colorizeIfNeeded = (
  debounce(
    colorize,
    200,
  )
)

const onActiveEditorChange = (
  editor: (
    | (
      vscode
      .TextEditor
    )
    | undefined
  )
) => {
  if (editor == null) {
    return
  }

  colorizeIfNeeded(
    editor
  )
}

function onConfigChange() {
  const textEditors = (
    vscode
    .window
    .visibleTextEditors
  )

  textEditors
  .filter((
    editor
  ) => (
    editor
  ))
  .forEach((
    editor,
  ) => {
    colorizeIfNeeded(
      editor
    )
  })
}

function onTextDocumentChange(
  event: vscode.TextDocumentChangeEvent,
) {
  const editor = (
    vscode
    .window
    .activeTextEditor
  )

  if (
    editor != null
    && (
      (
        editor
        .document
      )
      === (
        event
        .document
      )
    )
  ) {
    colorizeIfNeeded(
      editor
    )
  }
}

export const activate = (
  context: (
    vscode
    .ExtensionContext
  )
) => {
  context
  .subscriptions
  .push(
    vscode
    .window
    .onDidChangeActiveColorTheme(
      onConfigChange
    )
  )

  context
  .subscriptions
  .push(
    vscode
    .window
    .onDidChangeActiveTextEditor(
      onActiveEditorChange
    )
  )

  context
  .subscriptions
  .push(
    vscode
    .workspace
    .onDidChangeConfiguration(
      onConfigChange
    )
  )

  context
  .subscriptions
  .push(
    vscode
    .workspace
    .onDidChangeTextDocument(
      onTextDocumentChange
    )
  )

  const editor = (
    vscode
    .window
    .activeTextEditor
  )

  if (editor != null) {
    colorizeIfNeeded(
      editor
    )
  }
  else {
    removePreviousTextEditorDecorations()
  }
}

export const deactivate = () => {}
