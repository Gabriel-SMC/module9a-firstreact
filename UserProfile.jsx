export function ContactCard({ email, phone, location }) {
  const contactStyle = {
    maxWidth: '400px',
    margin: '10px auto',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #313131',
    backgroundColor: '#f8f9fa',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    color: '#333'
  };

  return (
    <div style={contactStyle}>
      <p style={{ margin: '4px 0' }}><strong>Email:</strong> {email}</p>
      <p style={{ margin: '4px 0' }}><strong>Phone:</strong> {phone}</p>
      <p style={{ margin: '4px 0' }}><strong>Location:</strong> {location}</p>
    </div>
  );
}

function UserProfile() {
  const profile1 = {
    name: "Gabriel Townsend",
    bio: "Up and coming digital artist who enjoys making illustrations.",
    email: "gabriel@example.com",
    phone: "(555) 019-2834",
    location: "Las Vegas, NV"
  };

  const profile2 = {
    name: "Alex Rivera",
    bio: "UI/UX designer who loves clean layouts and accessible web experiences.",
    email: "alex@example.com",
    phone: "(555) 018-4920",
    location: "Seattle, WA"
  };

  const cardStyle = {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
  };

  return (
    <div>
      <div style={cardStyle}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>{profile1.name}</h1>
        <p style={{ fontSize: '16px', color: '#555' }}>{profile1.bio}</p>
        
        <ContactCard 
          email={profile1.email} 
          phone={profile1.phone} 
          location={profile1.location} 
        />
      </div>

      <div style={cardStyle}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>{profile2.name}</h1>
        <p style={{ fontSize: '16px', color: '#555' }}>{profile2.bio}</p>
        
        <ContactCard 
          email={profile2.email} 
          phone={profile2.phone} 
          location={profile2.location} 
        />
      </div>
    </div>
  );
}

export default UserProfile;
