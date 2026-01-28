import venueImg1 from '../assets/venue-1.png'
import venueImg2 from '../assets/venue-2.jpg'

export const venueData = [
    {
        id: 0,
        title: "Main Auditorium",
        imgSrc: venueImg1,
        imgAlt: "Auditorium for Art Performance",
        desc: "The venue offers a professional performance hall suitable for cultural events, theater productions, concerts, seminars, and community gatherings.",
        shortDesc: "For theater performances, concerts, dance shows, etc.",
        type: "Performance & Event Hall",
        capacity: "Up to 600 seats",
        facilities: ["Main stage with professional lighting system", "High-quality sound system", "Audience seating area", "Backstage and dressing rooms", "Basic technical support"]
    },
    {
        id: 1,
        title: "Rehearsal & Training Room",
        imgSrc: venueImg2,
        imgAlt: "Classroom for art practice or studies",
        desc: "A functional and comfortable space designed for regular training, rehearsals, and creative workshops, supporting focused learning and artistic development.",
        shortDesc: "For art workshops, rehearsals, etc.",
        type: "Class & Practice Space",
        capacity: "Up to 30 participants",
        facilities: ["Open practice area", "Basic sound system", "Mirrors and wooden floor (dance-friendly)", "Flexible seating arrangement"]
    }
]
