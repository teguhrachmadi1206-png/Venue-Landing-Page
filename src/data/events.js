import eventPoster1 from '../assets/event-poster-1.webp'
import eventPoster2 from '../assets/event-poster-2.webp'
import eventPoster3 from '../assets/event-poster-3.webp'
import eventPoster4 from '../assets/event-poster-4.webp'
import eventPoster5 from '../assets/event-poster-5.webp'
import eventPoster6 from '../assets/event-poster-6.webp'
import eventPoster7 from '../assets/event-poster-7.webp'
import eventPoster8 from '../assets/event-poster-8.webp'
import eventPoster9 from '../assets/event-poster-9.webp'
import eventPoster10 from '../assets/event-poster-10.webp'
import eventPoster11 from '../assets/event-poster-11.webp'
import eventPoster12 from '../assets/event-poster-12.webp'
import eventPoster13 from '../assets/event-poster-13.webp'
import eventPoster14 from '../assets/event-poster-14.webp'
import eventPoster15 from '../assets/event-poster-15.webp'


export const events = [
    {
        id: 0,
        title: "Echoes on the Stage",
        posterSrc: eventPoster1,
        posterAlt: "Echoes on the Stage Poster",
        artist: "Teater Nusantara",
        dateTime: "2026-08-17T19:30:00",
        endDateTime: "2026-08-17T19:30:00",
        showtimes: [
            { id: 1, date: "2026-08-17", times: ["19:30"] }
        ],
        leadArtists: [
            { id: 1, name: "Raka Pradipta", role: "Lead Actor" },
            { id: 2, name: "Maya Kirana", role: "Supporting Actress" },
            { id: 3, name: "Dimas Arvian", role: "Stage Director" }
        ],
        desc: "A contemporary theater performance exploring human emotion, silence, and dramatic expression through powerful storytelling.",
        synopsis: "In a timeless, undefined space, five individuals confront the echoes of their past. Through silence, movement, and dialogue, the performance reveals how unresolved emotions continue to shape identity.",
        duration: 90,
        price: 10,
        category: "Theatre"
    },
    {
        id: 1,
        title: "Harmony of the City",
        posterSrc: eventPoster2,
        posterAlt: "Harmony of the City Poster",
        artist: "Urban Orchestra",
        dateTime: "2026-09-05T14:00:00",
        endDateTime: "2026-09-06T20:00:00",
        showtimes: [
            { id: 1, date: "2026-09-05", times: ["14:00", "19:00"] },
            { id: 2, date: "2026-09-06", times: ["15:00", "20:00"] }
        ],
        leadArtists: [
            { id: 1, name: "Adrian Wijaya", role: "Conductor" },
            { id: 2, name: "Nadia Prameswari", role: "Lead Vocalist" },
            { id: 3, name: "Kevin Hartanto", role: "Pianist" }
        ],
        desc: "A dynamic musical production combining vocals, live instruments, and movement to reflect the rhythm of urban life.",
        synopsis: "A vibrant musical portrait of city life, capturing the chaos, rhythm, and hidden beauty of urban existence through orchestration and movement.",
        duration: 100,
        price: 12,
        category: "Music"
    },
    {
        id: 2,
        title: "Motion in Grace",
        posterSrc: eventPoster3,
        posterAlt: "Motion in Grace Poster",
        artist: "Gerak Nusantara Dance Co.",
        dateTime: "2026-10-02T18:30:00",
        endDateTime: "2026-10-03T20:00:00",
        showtimes: [
            { id: 1, date: "2026-10-02", times: ["18:30"] },
            { id: 2, date: "2026-10-04", times: ["14:00", "20:00"] }
        ],
        leadArtists: [
            { id: 1, name: "Intan Maharani", role: "Principal Dancer" },
            { id: 2, name: "Bagas Wicaksono", role: "Lead Dancer" },
            { id: 3, name: "Fajar Nugroho", role: "Artistic Director" }
        ],
        desc: "A dance showcase inspired by traditional movement, transformed into contemporary stage interpretation.",
        synopsis: "A contemporary reinterpretation of traditional Indonesian dance, exploring identity and transformation through movement and visual storytelling.",
        duration: 85,
        price: 10,
        category: "Dance"
    },
    {
        id: 3,
        title: "Spectrum of Arts",
        posterSrc: eventPoster4,
        posterAlt: "Spectrum of Arts Poster",
        artist: "Harmony Arts",
        dateTime: "2026-11-12T13:00:00",
        endDateTime: "2026-11-12T20:00:00",
        showtimes: [
            { id: 1, date: "2026-10-31", times: ["13:00", "16:00", "20:00"] },
            { id: 2, date: "2026-11-01", times: ["13:00", "16:00", "20:00"] }
        ],
        leadArtists: [
            { id: 1, name: "Elena Suryadi", role: "Creative Director" },
            { id: 2, name: "Farhan Akbar", role: "Theater Performer" },
            { id: 3, name: "Clara Wijaksana", role: "Vocalist" }
        ],

        desc: "A collaborative arts event featuring theater, music, dance, and visual performances on one stage.",
        synopsis: "A multidisciplinary performance blending theater, music, dance, and digital visuals into one immersive artistic experience.",
        duration: 120,
        price: 15,
        category: "Multi-Arts"
    },
    {
        id: 4,
        title: "Roots and Resonance",
        posterSrc: eventPoster5,
        posterAlt: "Roots and Resonance Poster",
        artist: "Bamboo Ethnic",
        dateTime: "2026-12-06T15:00:00",
        endDateTime: "2026-12-07T19:00:00",
        showtimes: [
            { id: 1, date: "2026-12-31", times: ["15:00", "19:00"] },
            { id: 2, date: "2027-01-01", times: ["19:00"] },
            { id: 3, date: "2027-01-02", times: ["19:00"] }
        ],
        leadArtists: [
            { id: 1, name: "Surya Adinata", role: "Music Director" },
            { id: 2, name: "Rini Puspasari", role: "Lead Dancer" },
            { id: 3, name: "Gilang Ramadhan Putra", role: "Bamboo Specialist" }
        ],

        desc: "A fusion performance connecting traditional Indonesian arts with contemporary stage interpretation.",
        synopsis: "A cultural performance bridging ancestral traditions with modern expression through music, dance, and storytelling.",
        duration: 95,
        price: 12,
        category: "Traditional"
    },
    {
        id: 5,
        title: "Shadows of the Mind",
        posterSrc: eventPoster6,
        posterAlt: "Shadows of the Mind Poster",
        artist: "Teater Rasa",
        dateTime: "2024-11-15T19:30:00",
        endDateTime: "2024-11-16T19:30:00",
        showtimes: [
            { id: 1, date: "2024-11-15", times: ["19:30"] },
            { id: 2, date: "2024-11-16", times: ["16:00", "19:30"] }
        ],
        leadArtists: [
            { id: 1, name: "Arga Saputra", role: "Lead Actor" },
            { id: 2, name: "Nadya Lestari", role: "Supporting Actress" },
            { id: 3, name: "Reza Mahardika", role: "Director" }
        ],
        desc: "An experimental theater performance exploring inner conflict and human consciousness through symbolic storytelling.",
        synopsis: "An abstract exploration of the human psyche, revealing internal struggles through symbolic and fragmented storytelling.",
        duration: 80,
        price: 11,
        category: "Theatre"
    },
    {
        id: 6,
        title: "Melodies of the Archipelago",
        posterSrc: eventPoster7,
        posterAlt: "Melodies of the Archipelago Poster",
        artist: "Nusantara Harmonic Ensemble",
        dateTime: "2025-10-10T19:00:00",
        endDateTime: "2025-10-10T19:00:00",
        showtimes: [
            { id: 1, date: "2025-10-10", times: ["19:00"] }
        ],
        leadArtists: [
            { id: 1, name: "Rendra Kusuma", role: "Conductor" },
            { id: 2, name: "Tania Wibisono", role: "Vocalist" },
            { id: 3, name: "Michael Santoso", role: "Composer" }
        ],
        desc: "A musical journey presenting traditional melodies from across Indonesia in a modern orchestral arrangement.",
        synopsis: "A modern orchestral reinterpretation of traditional Indonesian melodies, blending heritage with contemporary musical expression.",
        duration: 105,
        price: 14,
        category: "Music"
    },
    {
        id: 7,
        title: "Flow in Motion",
        posterSrc: eventPoster8,
        posterAlt: "Flow in Motion Poster",
        artist: "Seni Warisan Group",
        dateTime: "2025-08-03T15:00:00",
        endDateTime: "2025-08-03T20:00:00",
        showtimes: [
            { id: 1, date: "2025-08-03", times: ["15:00", "18:30", "20:00"] }
        ],
        leadArtists: [
            { id: 1, name: "Nabila Rahma", role: "Principal Dancer" },
            { id: 2, name: "Yoga Prasetya", role: "Lead Dancer" },
            { id: 3, name: "Hana Wicaksana", role: "Choreographer" }
        ],
        desc: "A contemporary dance piece exploring fluidity, balance, and emotional expression through movement.",
        synopsis: "A poetic exploration of movement and emotion, 'Flow in Motion' captures the essence of balance and transformation through fluid choreography and expressive performance.",
        duration: 75,
        price: 10,
        category: "Dance"
    },
    {
        id: 8,
        title: "Fragments of Tradition",
        posterSrc: eventPoster9,
        posterAlt: "Fragments of Tradition Poster",
        artist: "Gerak Kontemporer Collective",
        dateTime: "2025-09-21T19:00:00",
        endDateTime: "2025-09-22T20:00:00",
        showtimes: [
            { id: 1, date: "2025-09-21", times: ["19:00"] },
            { id: 2, date: "2025-09-22", times: ["16:00", "20:00"] }
        ],
        leadArtists: [
            { id: 1, name: "Rizka Anindita", role: "Creative Director" },
            { id: 2, name: "Dimas Kurniawan", role: "Performer" },
            { id: 3, name: "Salsa Maharani", role: "Multidisciplinary Artist" }
        ],
        desc: "A multi-disciplinary performance reinterpreting traditional Indonesian arts in a modern stage format.",
        synopsis: "A reinterpretation of tradition through fragmented narratives, blending movement, sound, and visuals into a contemporary stage language.",
        duration: 95,
        price: 12,
        category: "Traditional"
    },
    {
        id: 9,
        title: "Strings of Tradition",
        posterSrc: eventPoster10,
        posterAlt: "Strings of Tradition Poster",
        artist: "Sunda Ensemble",
        dateTime: "2025-07-12T19:30:00",
        endDateTime: "2025-07-12T19:30:00",
        showtimes: [
            { id: 1, date: "2025-07-12", times: ["19:30"] }
        ],
        leadArtists: [
            { id: 1, name: "Asep Nugraha", role: "Kecapi Player" },
            { id: 2, name: "Dewi Sartika", role: "Vocalist" },
            { id: 3, name: "Rian Hidayat", role: "Arranger" }
        ],
        desc: "A musical performance featuring traditional string instruments with modern arrangements.",
        synopsis: "A musical dialogue between past and present, showcasing traditional Sundanese string instruments in modern arrangements.",
        duration: 80,
        price: 10,
        category: "Music"
    },
    {
        id: 10,
        title: "Stage of Expressions",
        posterSrc: eventPoster11,
        posterAlt: "Stage of Expressions Poster",
        artist: "Creative Youth Theatre",
        dateTime: "2025-06-20T14:00:00",
        endDateTime: "2025-06-21T19:00:00",
        showtimes: [
            { id: 1, date: "2025-06-20", times: ["14:00", "18:00"] },
            { id: 2, date: "2025-06-21", times: ["15:00", "19:00"] }
        ],
        leadArtists: [
            { id: 1, name: "Farrel Aditya", role: "Lead Actor" },
            { id: 2, name: "Putri Cahyani", role: "Supporting Actress" },
            { id: 3, name: "Raka Mahesa", role: "Director" }
        ],
        desc: "A collaborative theatre production highlighting young performers and experimental storytelling.",
        synopsis: "A platform for young voices, this performance explores identity and expression through bold, experimental storytelling.",
        duration: 90,
        price: 8,
        category: "Theatre"
    },
    {
        id: 11,
        title: "Rhythm of the Archipelago",
        posterSrc: eventPoster12,
        posterAlt: "Rhythm of the Archipelago Poster",
        artist: "Nusantara Percussion Group",
        dateTime: "2025-05-10T16:00:00",
        endDateTime: "2025-05-10T20:00:00",
        showtimes: [
            { id: 1, date: "2025-05-10", times: ["16:00", "19:00", "20:00"] }
        ],
        leadArtists: [
            { id: 1, name: "Budi Santoso", role: "Percussion Leader" },
            { id: 2, name: "Agung Pratama", role: "Traditional Drummer" },
            { id: 3, name: "Rizky Fadilah", role: "Rhythm Composer" }
        ],
        desc: "A dynamic performance showcasing diverse rhythms from across Indonesian regions.",
        synopsis: "An energetic celebration of Indonesia’s rhythmic diversity, blending traditional percussion with modern stage dynamics.",
        duration: 85,
        price: 11,
        category: "Music"
    },
    {
        id: 12,
        title: "Contemporary Moves",
        posterSrc: eventPoster13,
        posterAlt: "Contemporary Moves Poster",
        artist: "Modern Motion Crew",
        dateTime: "2025-04-18T18:30:00",
        endDateTime: "2025-04-18T20:00:00",
        showtimes: [
            { id: 1, date: "2025-04-18", times: ["18:30", "20:00"] }
        ],
        leadArtists: [
            { id: 1, name: "Kevin Wijaya", role: "Lead Dancer" },
            { id: 2, name: "Sinta Maharani", role: "Contemporary Performer" },
            { id: 3, name: "Dio Prakoso", role: "Choreographer" }
        ],
        desc: "A modern dance performance exploring body movement, space, and expression.",
        synopsis: "A bold exploration of contemporary dance language, focusing on spatial awareness, body dynamics, and expressive freedom.",
        duration: 70,
        price: 9,
        category: "Dance"
    },
    {
        id: 13,
        title: "Colors of Culture",
        posterSrc: eventPoster14,
        posterAlt: "Colors of Culture Poster",
        artist: "Cultural Collaboration Project",
        dateTime: "2025-03-22T13:00:00",
        endDateTime: "2025-03-22T19:00:00",
        showtimes: [
            { id: 1, date: "2025-03-22", times: ["13:00", "17:00", "19:00"] }
        ],
        leadArtists: [
            { id: 1, name: "Nina Kartika", role: "Creative Producer" },
            { id: 2, name: "Andre Saputra", role: "Musician" },
            { id: 3, name: "Laras Wulandari", role: "Dancer" }
        ],
        desc: "A multi-arts performance combining dance, music, and visual elements in one stage.",
        synopsis: "A vibrant fusion of artistic disciplines, celebrating cultural diversity through sound, movement, and visual storytelling.",
        duration: 110,
        price: 13,
        category: "Multi-Arts"
    },
    {
        id: 14,
        title: "Voices of Tradition",
        posterSrc: eventPoster15,
        posterAlt: "Voices of Tradition Poster",
        artist: "Traditional Vocal Group",
        dateTime: "2025-02-14T19:00:00",
        endDateTime: "2025-02-15T19:00:00",
        showtimes: [
            { id: 1, date: "2025-02-14", times: ["19:00"] },
            { id: 2, date: "2025-02-15", times: ["15:00", "19:00"] }
        ],
        leadArtists: [
            { id: 1, name: "Siti Rahmawati", role: "Lead Vocalist" },
            { id: 2, name: "Dedi Kurnia", role: "Traditional Singer" },
            { id: 3, name: "Ahmad Fauzi", role: "Music Director" }
        ],
        desc: "A vocal performance rooted in traditional Indonesian singing styles with contemporary interpretation.",
        synopsis: "A vocal journey through Indonesia’s traditional singing styles, reinterpreted with modern arrangements and emotional depth.",
        duration: 85,
        price: 10,
        category: "Traditional"
    }
]

export const eventCategories = [
    { id: 0, name: "All Categories" },
    { id: 1, name: "Theatre" },
    { id: 2, name: "Dance" },
    { id: 3, name: "Music" },
    { id: 4, name: "Traditional" },
    { id: 5, name: "Multi-Arts" }
]