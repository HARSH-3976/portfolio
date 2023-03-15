

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="harshdubey1198"
        blockSize={20}
        blockMargin={10}
        color="violet"
        fontSize={16}
       // fullYear="false"
      />
    </Row>
  );
}

export default Github;




// import { useState, useEffect } from 'react';
// import GitHubCalendar from "react-github-calendar";
// // import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// function GitHubCalendar({ username }) {
//   const [contributions, setContributions] = useState([]);

//   useEffect(() => {
//     async function fetchContributions() {
//       const response = await fetch(`https://api.github.com/users/$harshdubey1198/events`);
//       const events = await response.json();
//       const recentEvents = events.filter((event) => {
//         const date = new Date(event.created_at);
//         const twoMonthsAgo = new Date();
//         twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);
//         return date > twoMonthsAgo;
//       });
//       const dates = recentEvents.map((event) => {
//         const date = new Date(event.created_at);
//         return new Date(date.getFullYear(), date.getMonth(), date.getDate());
//       });
//       setContributions(dates);
//     }
//     fetchContributions();
//   }, [username]);

//   return <GitHubCalendar value={new Date()} tileContent={({ date }) => {
//     const formattedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
//     if (contributions.includes(formattedDate)) {
//       return <div className="contribution-day"></div>;
//     } else {
//       return null;
//     }
//   }} />;
// }

// export default GitHubCalendar;




// import React from "react";
// import GitHubCalendar from "react-github-calendar";

// const MyComponent = () => {
//   const endDate = today(); // set end date to today
//   const startDate = new Date();
//   startDate.setMonth(endDate.getMonth() - 3); // set start date to 2 months ago

//   const configOptions = {
//     username: "harshdubey1198",
//     theme: {
//       background: "transparent", // set background to transparent
//       text: "#ffffff", // set text color
//       grade4: "rgba(255, 255, 255, 0.4)", // set color for the oldest day
//       grade3: "rgba(255, 255, 255, 0.6)",
//       grade2: "rgba(255, 255, 255, 0.8)",
//       grade1: "rgba(255, 255, 255, 1)", // set color for the newest day
//     },
//     tooltips: true, // enable tooltips
//   };

//   return <GitHubCalendar startDate={startDate} endDate={endDate} {...configOptions} />;
// };

// export default MyComponent;



