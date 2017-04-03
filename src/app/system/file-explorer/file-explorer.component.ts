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
  data: any[] = [];
  hash = {};
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
  selectedNodes: any[] = [];

  constructor(){
    this.data =
      [
        {
          "label": "Documents",
          "children": [{
            "label": "Work",
            "children": [{"label": "Expenses.doc", "children":[]}, {"label": "Resume.doc", "children":[]}]
          },
            {
              "selected": false,
              "label": "Home",
              "children": [{"label": "Invoices.txt", "children":[]}]
            }]
        },
        {
          "label": "Pictures",
          "children": [
            {"label": "barcelona.jpg", "children":[]},
            {"label": "logo.jpg", "children":[]},
            {"label": "primeui.png", "children":[]}]
        },
        {
          "label": "Movies",
          "children": [{
            "label": "Al Pacino",
            "children": [{"label": "Scarface", "data": "Scarface Movie", "children":[]}, {"label": "Serpico", "data": "Serpico Movie", "children":[]}]
          },
            {
              "label": "Robert De Niro",
              "children": [{"label": "Goodfellas", "children":[]}, {"label": "Untouchables", "children":[]}]
            }]
        }
      ]

    this.hash = this.buildDataHierarchy(this.data);
  }

  buildDataHierarchy(data: any[]): any {
    let id = 1;
    let hash = {};
    let setNodeID = (node : any, parentId: number) => {
      hash[id] = node;
      node['selected'] = false;
      node['nodeId'] = id;
      node['parentNodeId'] = parentId;
      if (node.children.length){
        const parentId = id;
        node.children.forEach(function(node: any){
          id++;
          setNodeID(node, parentId);
        });
      }
      id++;
    }
    data.forEach(function(node: any){
      setNodeID(node, 0);
    });
    return hash;
  }

  nodeSelected(toggleNode: any) {
    // select / unselect all children (recursive)
    let toggleChildren = (node: any) => {
      node.children.forEach(function (child: any) {
        child.selected = node.selected;
        if (child.children.length) {
          toggleChildren(child);
        }
      });
    }
    toggleChildren(toggleNode);

    //update parent if needed (recursive)
    let updateParent = (node: any) => {
      if (node.parentNodeId != 0) {
        const parentNode = this.hash[node.parentNodeId];
        const siblings = parentNode.children;
        parentNode.partialSelection = false;
        let equalSiblings = true;
        siblings.forEach(function(sibling: any){
          if (sibling.selected !== node.selected){
            equalSiblings = false;
          }
        });
        if (equalSiblings){
          parentNode.selected = node.selected;
          if (parentNode.parentNodeId != 0){
            updateParent(parentNode);
          }
        }else{
          parentNode.partialSelection = true;
        }
      }
    }
    updateParent(toggleNode);
    this.updateSelected();
  }

  updateSelected(){
    this.selectedNodes = [];
    for (let node in this.hash) {
      if (this.hash[node].selected) {
        let currentNode = this.hash[node];
        let nodeLabel = currentNode['label'];
        while (currentNode.parentNodeId !==0){
          currentNode = this.hash[currentNode.parentNodeId];
          nodeLabel = currentNode['label'] + ' > ' + nodeLabel;
        }
        this.selectedNodes.push(nodeLabel);
      }
    }
  }
  ngOnInit() {
  }

}
