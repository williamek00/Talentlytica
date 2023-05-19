import React, { useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState({
    aspek_penilaian_1: {
      mahasiswa_1: '',
      mahasiswa_2: '',
      mahasiswa_3: '',
      mahasiswa_4: '',
      mahasiswa_5: '',
    },
    aspek_penilaian_2: {
      mahasiswa_1: '',
      mahasiswa_2: '',
      mahasiswa_3: '',
      mahasiswa_4: '',
      mahasiswa_5: '',
    },
    aspek_penilaian_3: {
      mahasiswa_1: '',
      mahasiswa_2: '',
      mahasiswa_3: '',
      mahasiswa_4: '',
      mahasiswa_5: '',
    },
    aspek_penilaian_4: {
      mahasiswa_1: '',
      mahasiswa_2: '',
      mahasiswa_3: '',
      mahasiswa_4: '',
      mahasiswa_5: '',
    },
  });
  
  const handleDropdownChange = (aspek, mahasiswa, value) => {
    setData((prevData) => ({
      ...prevData,
      [aspek]: {
        ...prevData[aspek],
        [mahasiswa]: value,
      },
    }));
  };
  

  const handleSave = async () => {
    try {
      const response = await axios.post("http://localhost:3000/posts", data);
      console.log("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mahasiswa</th>
            {Object.keys(data).map((aspek) => (
              <th key={aspek}>{aspek}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(data.aspek_penilaian_1).map((mahasiswa) => (
            <tr key={mahasiswa}>
              <td>{mahasiswa}</td>
              {Object.keys(data).map((aspek) => (
                <td key={aspek}>
                  <select
                    value={data[aspek][mahasiswa]}
                    onChange={(e) => handleDropdownChange(aspek, mahasiswa, e.target.value)}
                  >
                    <option value="">Pilih nilai</option>
                    {Array.from({ length: 10 }, (_, i) => {
                      const optionValue = i + 1;
                      console.log('Option Value:', optionValue);
                      return (
                        <option key={optionValue} value={optionValue}>
                          {optionValue}
                        </option>
                      );
                    })}
                  </select>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSave}>Save</button>
    </div>
  );
  
}

export default App;
