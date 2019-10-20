import React, { Component } from 'react';
import MaterialTable from 'material-table';
import tableStyle from './data-table.module.scss';
import { Edit, Remove } from '@material-ui/icons';

export default function ProjectTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'projectName' },
      { title: 'Status', field: 'projectStatus' },
      { title: 'Location', field: 'location' },
      { title: 'Latitude', field: 'latitude' },
      { title: 'Longitude', field: 'longitude' },
      { title: 'Type', field: 'projectType' },
      { title: 'Description', field: 'description' },
      { title: 'Sponsors', field: 'sponsors' },
      { title: 'Dedicated', field: 'dedicatedTo' },
      { title: 'Completed', field: 'completedYear' },
      { title: 'Planted', field: 'plantedYear' },
      { title: 'Image URL', field: 'imageUrl' },
      { title: 'Page URL', field: 'pageUrl' }
    ],
    data: [
      {
        projectName: 'Project 1',
        projectStatus: 'Complete',
        location: 'Somewhere, Someplace',
        latitude: '123.456789',
        longitude: '123.456789',
        projectType: 'Kindergarten',
        description: 'text here',
        sponsors: 'people',
        dedicatedTo: 'person',
        completedYear: '2031',
        plantedYear: '2050',
        imageUrl: 'link',
        pageUrl: 'link'
      },
      {
        projectName: 'Project 2',
        projectStatus: 'Complete',
        location: 'Somewhere, Someplace',
        latitude: '123.456789',
        longitude: '123.456789',
        projectType: 'Kindergarten',
        description: 'text here',
        sponsors: 'people',
        dedicatedTo: 'person',
        completedYear: '2031',
        plantedYear: '2050',
        imageUrl: 'link',
        pageUrl: 'link'
      },
      {
        projectName: 'Project 3',
        projectStatus: 'Complete',
        location: 'Somewhere, Someplace',
        latitude: '123.456789',
        longitude: '123.456789',
        projectType: 'Kindergarten',
        description: 'text here',
        sponsors: 'people',
        dedicatedTo: 'person',
        completedYear: '2031',
        plantedYear: '2050',
        imageUrl: 'link',
        pageUrl: 'link'
      },
      {
        projectName: 'Project 4',
        projectStatus: 'Complete',
        location: 'Somewhere, Someplace',
        latitude: '123.456789',
        longitude: '123.456789',
        projectType: 'Kindergarten',
        description: 'text here',
        sponsors: 'people',
        dedicatedTo: 'person',
        completedYear: '2031',
        plantedYear: '2050',
        imageUrl: 'link',
        pageUrl: 'link'
      }
    ]
  });

  return (
    <MaterialTable
      title='Projects'
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        // onRowUpdate: (newData, oldData) =>
        //   new Promise(resolve => {
        //     setTimeout(() => {
        //       resolve();
        //       const data = [...state.data];
        //       data[data.indexOf(oldData)] = newData;
        //       setState({ ...state, data });
        //     }, 600);
        //   }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          })
      }}
    />
  );
}
