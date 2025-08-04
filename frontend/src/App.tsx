// import React, { useState, useEffect } from 'react';

// type Run = {
//   id: number;
//   distance_km: number;
//   duration_min: number;
//   pace_min_per_km: number;
// };

// type Performance = {
//   total_runs: number;
//   total_distance_km: number;
//   total_duration_min: number;
//   average_pace_min_per_km: number;
//   message?: string;
// };

// export default function App() {
//   const [runs, setRuns] = useState<Run[]>([]);
//   const [performance, setPerformance] = useState<Performance | null>(null);
//   const [distance, setDistance] = useState('');
//   const [duration, setDuration] = useState('');
//   const [error, setError] = useState('');

//   const API_URL = 'http://localhost:5000'; // Flask default port

//   useEffect(() => {
//     fetchRuns();
//     fetchPerformance();
//   }, []);

//   const fetchRuns = async () => {
//     const res = await fetch(`${API_URL}/runs`);
//     const data = await res.json();
//     setRuns(data);
//   };

//   const fetchPerformance = async () => {
//     const res = await fetch(`${API_URL}/performance`);
//     const data = await res.json();
//     setPerformance(data);
//   };

//   const handleAddRun = async () => {
//     setError('');
//     const distNum = parseFloat(distance);
//     const durNum = parseFloat(duration);

//     if (isNaN(distNum) || distNum <= 0 || isNaN(durNum) || durNum <= 0) {
//       setError('Please enter positive numbers for distance and duration.');
//       return;
//     }

//     const res = await fetch(`${API_URL}/runs`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ distance_km: distNum, duration_min: durNum }),
//     });

//     if (!res.ok) {
//       const err = await res.json();
//       setError(err.error || 'Failed to add run.');
//       return;
//     }

//     setDistance('');
//     setDuration('');
//     fetchRuns();
//     fetchPerformance();
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
//       <h1>paceMind Running Tracker</h1>

//       <div style={{ marginBottom: 20 }}>
//         <h2>Add a Run</h2>
//         <input
//           type="number"
//           step="0.01"
//           placeholder="Distance (km)"
//           value={distance}
//           onChange={(e) => setDistance(e.target.value)}
//           style={{ marginRight: 10, padding: 5, width: 120 }}
//         />
//         <input
//           type="number"
//           step="0.01"
//           placeholder="Duration (min)"
//           value={duration}
//           onChange={(e) => setDuration(e.target.value)}
//           style={{ marginRight: 10, padding: 5, width: 120 }}
//         />
//         <button onClick={handleAddRun} style={{ padding: '5px 15px' }}>
//           Add Run
//         </button>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </div>

//       <div style={{ marginBottom: 20 }}>
//         <h2>Performance Summary</h2>
//         {performance ? (
//           performance.message ? (
//             <p>{performance.message}</p>
//           ) : (
//             <ul>
//               <li>Total Runs: {performance.total_runs}</li>
//               <li>Total Distance: {performance.total_distance_km.toFixed(2)} km</li>
//               <li>Total Duration: {performance.total_duration_min.toFixed(2)} min</li>
//               <li>Average Pace: {performance.average_pace_min_per_km.toFixed(2)} min/km</li>
//             </ul>
//           )
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>

//       <div>
//         <h2>All Runs</h2>
//         <table border={1} cellPadding={5} style={{ width: '100%', borderCollapse: 'collapse' }}>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Distance (km)</th>
//               <th>Duration (min)</th>
//               <th>Pace (min/km)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {runs.map((run) => (
//               <tr key={run.id}>
//                 <td>{run.id}</td>
//                 <td>{run.distance_km}</td>
//                 <td>{run.duration_min}</td>
//                 <td>{run.pace_min_per_km}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }



import React from 'react';
import HomePage from './pages/index';

export default function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
