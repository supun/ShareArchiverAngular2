/*
 * @Author: Supun Dharmarathne 
 * @Date: 2017-04-03 16:24:00 
 * @Last Modified by:   Supun Dharmarathne 
 * @Last Modified time: 2017-04-03 16:24:00 
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css']
})
export class FileExplorerComponent implements OnInit {
  dataTable = [
    {
      "name":"Supun1",
      "email":"Testmail.com",
      "age":24,
      "city":"CMB"
    },
    {
      "name":"Supun2",
      "email":"Testmail.com",
      "age":24,
      "city":"CMB"
    },
    {
      "name":"Supun3",
      "email":"Testmail.com",
      "age":24,
      "city":"CMB"
    },
    {
      "name":"Supun1",
      "email":"Testmail.com",
      "age":24,
      "city":"CMB"
    },
    {
      "name":"Supun2",
      "email":"Testmail.com",
      "age":24,
      "city":"CMB"
    },
    {
      "name":"Supun3",
      "email":"Testmail.com",
      "age":24,
      "city":"CMB"
    },
    {
      "name":"Supun1",
      "email":"Testmail.com",
      "age":24,
      "city":"CMB"
    },
    {
      "name":"Supun2",
      "email":"Testmail.com",
      "age":24,
      "city":"CMB"
    },
    {
      "name":"Supun3",
      "email":"Testmail.com",
      "age":24,
      "city":"CMB"
    }
  ];
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  public check(node, $event) {
           this.updateChildNodesCheckBox(node, $event.checked);
           this.updateParentNodesCheckBox(node.parent);
}
public updateChildNodesCheckBox(node, checked) {
  node.data.checked = checked;
  if (node.children) {
    node.children.forEach((child) => this.updateChildNodesCheckBox(child, checked));
  }
}
public updateParentNodesCheckBox(node) {
  if (node && node.level > 0 && node.children) {
    let allChildChecked = true;
    let noChildChecked = true;

    for (let child of node.children) {
      if (!child.data.checked) {
        allChildChecked = false;
      } else if (child.data.checked) {
        noChildChecked = false;
      }
    }

    if (allChildChecked) {
      node.data.checked = true;
      node.data.indeterminate = false;
    } else if (noChildChecked) {
      node.data.checked = false;
      node.data.indeterminate = false;
    } else {
      node.data.checked = true;
      node.data.indeterminate = true;
    }
    this.updateParentNodesCheckBox(node.parent);
  }
}
  constructor(){ }

  
  ngOnInit() {
  }

}
