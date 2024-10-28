
import { LineChart, Line,XAxis,YAxis } from 'recharts';
const Linecharts = () => {
    const studentMarks = [ { name: "Alice", math: 85, physics: 78, chemistry: 82 }, { name: "Bob", math: 90, physics: 88, chemistry: 85 }, { name: "Charlie", math: 75, physics: 70, chemistry: 78 }, { name: "David", math: 92, physics: 95, chemistry: 89 }, { name: "Eva", math: 88, physics: 82, chemistry: 80 }, { name: "Frank", math: 76, physics: 75, chemistry: 74 }, { name: "Grace", math: 95, physics: 91, chemistry: 92 }, { name: "Hannah", math: 84, physics: 83, chemistry: 88 }, { name: "Ian", math: 70, physics: 72, chemistry: 71 }, { name: "Jack", math: 80, physics: 77, chemistry: 79 } ];


    return (
        <div className='mt-10'>
          
          <LineChart width={700} height={400} data={studentMarks}>
          <XAxis ></XAxis>
          <YAxis ></YAxis>
          <Line  dataKey="math" stroke="#8884d8" />
          <Line  dataKey="physics" stroke="red" />
          <Line  dataKey="chemistry" stroke="yellow" />
          </LineChart>  
        </div>
    );
};

export default Linecharts;