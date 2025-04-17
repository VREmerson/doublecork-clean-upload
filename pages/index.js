import React, { useState } from 'react';

const sampleRecruiters = [
  {
    name: "TechRise Partners",
    industry: "Software Engineering, DevOps, Cloud",
    location: "New York, NY",
    description: "We specialize in placing full-stack developers, DevOps engineers, and cloud architects at hyper-growth startups.",
    email: "connect@techrisepartners.com"
  },
  {
    name: "DataWave Search",
    industry: "AI, Data Science, Analytics",
    location: "San Francisco, CA",
    description: "Focused exclusively on AI and data-driven companies, from stealth mode to IPO.",
    email: "contact@datawavesearch.com"
  },
  {
    name: "ExecPro Talent",
    industry: "Executive & Leadership Roles",
    location: "Remote / Global",
    description: "Placing VP+ roles across Product, Engineering, Marketing, and Finance.",
    email: "hello@execprotalent.com"
  }
];

function Home() {
  const [resumeText, setResumeText] = useState("");
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  const findMatches = async () => {
    setLoading(true);
    const topMatches = sampleRecruiters.slice(0, 3);
    await new Promise(res => setTimeout(res, 1000));
    setMatches(topMatches);
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>🔍 Find the Right Recruiter</h1>
      <textarea
        placeholder="Paste your resume or LinkedIn summary here..."
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        style={{ width: '100%', minHeight: '150px', margin: '1rem 0', padding: '0.5rem' }}
      />
      <button onClick={findMatches} disabled={loading} style={{ padding: '0.5rem 1rem', marginBottom: '1rem' }}>
        {loading ? "Finding Matches..." : "Match Me with Recruiters"}
      </button>
      {matches.length > 0 && (
        <div>
          <h2 style={{ fontWeight: '600', fontSize: '18px' }}>Top Matches</h2>
          {matches.map((match, idx) => (
            <div key={idx} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
              <h3 style={{ fontWeight: 'bold' }}>{match.name}</h3>
              <p><strong>Specialty:</strong> {match.industry}</p>
              <p><strong>Location:</strong> {match.location}</p>
              <p>{match.description}</p>
              <a href={`mailto:${match.email}`} style={{ color: 'blue', textDecoration: 'underline' }}>Email Recruiter</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
