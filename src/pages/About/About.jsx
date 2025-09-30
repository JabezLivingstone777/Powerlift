import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Telangana Powerlifting Federation</h1>
          <p>Building strength, character, and champions since 2010</p>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                The Telangana Powerlifting Federation was established in 2010 with a vision to promote and develop powerlifting across the state of Telangana. What started as a small group of passionate strength athletes has grown into the leading powerlifting organization in the region.
              </p>
              <p>
                Over the years, we have fostered a community of dedicated athletes, coaches, and supporters who share a common goal: to push the boundaries of human strength and achieve excellence in powerlifting. Our federation has produced numerous national and international champions who have brought pride to our state.
              </p>
              <p>
                Today, we stand as a testament to the power of dedication, hard work, and community support. With over 500 registered athletes and 25+ annual events, we continue to grow and inspire the next generation of powerlifters.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span>🏋️‍♂️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To promote, develop, and regulate powerlifting throughout Telangana state by providing opportunities for athletes of all levels to compete, train, and excel in the sport while maintaining the highest standards of integrity and fair play.
              </p>
            </div>
            <div className="vision-card">
              <div className="card-icon">🌟</div>
              <h3>Our Vision</h3>
              <p>
                To be the premier powerlifting federation in India, recognized for developing world-class athletes, promoting inclusive participation, and advancing the sport through innovation, education, and community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">💪</div>
              <h4>Strength</h4>
              <p>We believe in developing not just physical strength, but mental resilience and character</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h4>Integrity</h4>
              <p>We maintain the highest ethical standards in all our competitions and programs</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌍</div>
              <h4>Inclusivity</h4>
              <p>We welcome athletes of all backgrounds, abilities, and experience levels</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🏆</div>
              <h4>Excellence</h4>
              <p>We strive for excellence in everything we do, from competitions to coaching</p>
            </div>
            <div className="value-item">
              <div className="value-icon">📚</div>
              <h4>Education</h4>
              <p>We promote continuous learning and development in powerlifting techniques and safety</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤲</div>
              <h4>Community</h4>
              <p>We foster a supportive community that celebrates success and supports growth</p>
            </div>
          </div>
        </div>
      </section>

      <section className="leadership-section">
        <div className="container">
          <div className="section-header">
            <h2>Leadership Team</h2>
            <p>Meet the dedicated individuals leading our federation forward</p>
          </div>
          <div className="leadership-grid">
            <div className="leader-card">
              <div className="leader-image">
                <span>👤</span>
              </div>
              <div className="leader-info">
                <h4>Mr. Rajesh Kumar</h4>
                <p className="position">President</p>
                <p className="bio">With over 20 years in powerlifting, Rajesh has been instrumental in developing the sport across Telangana. Former national champion and certified coach.</p>
              </div>
            </div>
            <div className="leader-card">
              <div className="leader-image">
                <span>👤</span>
              </div>
              <div className="leader-info">
                <h4>Ms. Priya Sharma</h4>
                <p className="position">Vice President</p>
                <p className="bio">International referee and former state record holder. Priya leads our women's development programs and coaching certifications.</p>
              </div>
            </div>
            <div className="leader-card">
              <div className="leader-image">
                <span>👤</span>
              </div>
              <div className="leader-info">
                <h4>Dr. Vikram Reddy</h4>
                <p className="position">Secretary General</p>
                <p className="bio">Sports medicine specialist and powerlifting enthusiast. Vikram oversees our safety protocols and athlete wellness programs.</p>
              </div>
            </div>
            <div className="leader-card">
              <div className="leader-image">
                <span>👤</span>
              </div>
              <div className="leader-info">
                <h4>Mr. Suresh Patel</h4>
                <p className="position">Technical Director</p>
                <p className="bio">Former international competitor and IPF certified technical official. Leads our coaching development and competition standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Achievements</h2>
            <p>Celebrating our journey of success and milestones</p>
          </div>
          <div className="achievements-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h4>Federation Established</h4>
                <p>Official founding of Telangana Powerlifting Federation with 25 founding members</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2012</div>
              <div className="timeline-content">
                <h4>First State Championship</h4>
                <p>Organized our inaugural state championship with 150 participants</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h4>National Recognition</h4>
                <p>Gained official recognition from Powerlifting Federation of India</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h4>International Success</h4>
                <p>Our athletes won first international medals at Asian Championships</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h4>Digital Transformation</h4>
                <p>Launched online training programs and virtual competitions during pandemic</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h4>500+ Athletes</h4>
                <p>Reached milestone of 500+ registered athletes across all categories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="join-us-section">
        <div className="container">
          <div className="join-content">
            <h2>Join Our Community</h2>
            <p>Whether you're a beginner or an experienced lifter, there's a place for you in our federation</p>
            <div className="join-options">
              <div className="join-option">
                <h4>🏋️ Athletes</h4>
                <p>Register as an athlete and participate in our competitions and training programs</p>
              </div>
              <div className="join-option">
                <h4>👨‍🏫 Coaches</h4>
                <p>Join our coaching network and help develop the next generation of powerlifters</p>
              </div>
              <div className="join-option">
                <h4>🤝 Volunteers</h4>
                <p>Support our events and programs as a volunteer and be part of our success</p>
              </div>
              <div className="join-option">
                <h4>🏢 Sponsors</h4>
                <p>Partner with us to support the growth of powerlifting in Telangana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;