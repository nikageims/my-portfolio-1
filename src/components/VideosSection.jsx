import { useState, useEffect } from 'react';

const VideosSection = () => {
    const mockData = [
        {
            id: "S1JEZJX7GTY",
            title: "ვიპოვე საიდუმლო განძი! GeoTown SMP-ზე",
            thumb: "https://img.youtube.com/vi/S1JEZJX7GTY/maxresdefault.jpg"
        },
        {
            id: "MfqqnEneK6A",
            title: "ჩემი სრული თავგადასავალი GeoTown SMP-ზე",
            thumb: "https://img.youtube.com/vi/MfqqnEneK6A/maxresdefault.jpg"
        },
        {
            id: "-5a7A8Qj5kA",
            title: "🔴მეორე სეზონი დაიწყო!!! GeoTown SMP 🔴",
            thumb: "https://img.youtube.com/vi/-5a7A8Qj5kA/maxresdefault.jpg"
        }
    ];

    return (
        <section id="new-section" className="gradient-bg">
            <h2 className="section-title">ბოლო ვიდეოები</h2>
            <div className="videos-container">
                {mockData.map(video => (
                    <a key={video.id} href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer" className="video-card">
                        <div className="video-thumb-wrapper">
                            <img src={video.thumb} alt="Thumbnail" className="video-thumb" />
                            <div className="play-icon"><i className="fas fa-play"></i></div>
                        </div>
                        <div className="video-info">
                            <h3 className="video-title">{video.title}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default VideosSection;
