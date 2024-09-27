import { useState, useEffect } from 'react'
import CitizenCard from './CitizenCard';

const CitizensList = ({ data }) => {

  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    if (data) {
      setSelectedPerson(data[0])
    }
  }, [data]);

  const handleRowClick = (person) => {
    setSelectedPerson(person);
    console.log(person);
  };
  return (
    <div className='row vh-100 w-100 p-3'>
      <div className='col-2 vh-100 p-3'>
        <h3 className=''>Фильтры</h3>
      </div>
      <div className='col-4 vh-100 p-3'>
        <h3 className=''>Граждане</h3>
        <p>Всего: {data.length}</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ФИО</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person) => (
              <tr key={person.id} onClick={() => handleRowClick(person)} style={{ cursor: 'pointer' }}>
                <td>{`${person.LastName} ${person.FirstName} ${person.FatherName}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col-6 vh-100 p-3">
        <div style={{ flex: 1, marginLeft: '20px' }}>
          {selectedPerson && (
            <CitizenCard person={selectedPerson} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CitizensList;
