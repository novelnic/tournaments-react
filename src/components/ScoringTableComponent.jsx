import React from 'react';

class ScoringTableComponent extends React.Component {
  render() {
    return (
      <table
        className={
          'table table-dark table-bordered table-striped text-center my-2'
        }
      >
        <thead>
          <tr>
            <th scope='col'>Condition</th>
            <th scope='col'>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1st</td>
            <td>25</td>
          </tr>
          <tr>
            <td>2nd</td>
            <td>20</td>
          </tr>
          <tr>
            <td>3rd</td>
            <td>15</td>
          </tr>
          <tr>
            <td>4th</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Top 7</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Top 10</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Top 15</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Top 20</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Each Kill</td>
            <td>+1</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ScoringTableComponent;
