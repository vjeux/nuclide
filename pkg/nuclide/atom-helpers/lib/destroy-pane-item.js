'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

export default function destroyPaneItemWithTitle(title: string) {
  for (const item of atom.workspace.getPaneItems()) {
    if (item.getTitle() === title) {
      const pane = atom.workspace.paneForItem(item);
      pane.destroyItem(item);
      return;
    }
  }
}
