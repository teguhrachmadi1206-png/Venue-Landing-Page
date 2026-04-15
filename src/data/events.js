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
            {
                id: 1, date: "2026-08-17", sessions: [{
                    sessionId: 1, time: "19:30", seatStatus: {
                        A5: "taken", A6: "taken", A7: "taken", A12: "hold", B8: "taken", B9: "taken",
                        B10: "taken", B11: "taken", B15: "hold", C7: "taken", C8: "taken", C9: "taken", C14: "taken", C15: "taken",
                        D10: "taken", D11: "taken", D12: "taken", D13: "taken", D18: "hold", E9: "taken", E10: "taken", E11: "taken",
                        E14: "hold", F12: "taken", F13: "taken", F20: "unavailable", G6: "taken", G7: "taken", G8: "taken",
                        G18: "hold", H10: "taken", H11: "taken", H12: "taken", I14: "taken", I15: "taken", I22: "unavailable",
                        J9: "taken", J10: "taken", J11: "taken", K13: "hold", K14: "hold", L8: "taken", M16: "taken", N20: "hold"
                    }
                }]
            }
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
            {
                id: 1, date: "2026-09-05", sessions: [{
                    sessionId: 1, time: "14:00", seatStatus: {
                        A3: "taken", A4: "taken", A10: "hold", B5: "taken", B6: "taken", B7: "taken",
                        B18: "hold", C2: "taken", C11: "taken", C12: "taken", D6: "taken", D7: "taken", D15: "taken", D16: "taken",
                        D17: "taken", E4: "unavailable", E12: "taken", E13: "taken", F8: "taken", F18: "taken", F19: "taken",
                        F20: "taken", G10: "hold", G14: "taken", G15: "taken", H5: "taken", H6: "taken", H17: "hold",
                        I9: "taken", I10: "taken", I11: "taken", I21: "unavailable", J3: "taken", J14: "taken", J15: "taken",
                        K6: "taken", K7: "taken", K20: "hold", L11: "taken", M5: "taken", M6: "taken", N8: "hold", N18: "taken"
                    }
                }, {
                    sessionId: 2, time: "19:00", seatStatus: {
                        A5: "taken", A6: "taken", B10: "hold", B14: "taken", C7: "taken", C8: "taken",
                        D12: "taken", D13: "hold", E4: "taken", E15: "taken", F9: "hold", F10: "taken",
                        G6: "taken", G7: "taken", H18: "unavailable", I11: "taken", I12: "hold", J3: "taken",
                        J4: "taken", K20: "hold", L6: "taken", M13: "taken", N9: "hold", N10: "taken"
                    }
                }]
            },
            {
                id: 2, date: "2026-09-06", sessions: [{
                    sessionId: 1, time: "15:00", seatStatus: {
                        A8: "taken", B12: "hold", C5: "taken", D14: "taken", E9: "hold", F18: "taken",
                        G7: "hold", H11: "taken", I20: "unavailable", J6: "taken", K15: "hold", L10: "taken",
                        M22: "hold", N4: "taken"
                    }
                }, {
                    sessionId: 2, time: "20:00", seatStatus: {
                        A10: "hold", B12: "taken", B13: "taken", C8: "taken", C9: "taken", C10: "taken",
                        D9: "taken", D10: "taken", D11: "taken", D12: "taken", E7: "taken", E8: "taken", E9: "taken", E10: "taken",
                        E11: "taken", F6: "taken", F7: "taken", F8: "taken", F15: "hold", G9: "taken", G10: "taken", G11: "taken",
                        G12: "taken", H8: "taken", H9: "taken", H10: "taken", H18: "unavailable", I11: "taken", I12: "taken",
                        I13: "taken", J10: "taken", J11: "taken", J20: "hold", K14: "taken", K15: "taken", K16: "taken",
                        L12: "taken", M13: "taken", M14: "taken", N15: "hold", N22: "unavailable"
                    }
                }]
            }
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
            {
                id: 1, date: "2026-10-02", sessions: [{
                    sessionId: 1, time: "18:30", seatStatus: {
                        A3: "taken", A4: "taken", A10: "hold", B6: "taken", B7: "taken", B8: "taken",
                        C9: "taken", C10: "taken", C15: "hold", D8: "taken", D9: "taken", D10: "taken", D18: "hold",
                        E7: "taken", E8: "taken", E9: "taken", F12: "taken", F13: "taken", F20: "unavailable",
                        G5: "taken", G6: "taken", G7: "taken", H11: "taken", H12: "taken", I14: "taken", I15: "hold",
                        J9: "taken", J10: "taken", K13: "hold", K14: "taken", L8: "taken", M16: "taken", N20: "hold"
                    }
                }]
            },
            {
                id: 2, date: "2026-10-04", sessions: [{
                    sessionId: 1, time: "14:00", seatStatus: {
                        A6: "taken", A7: "taken", A8: "taken", B9: "taken", B10: "taken", B11: "taken",
                        C8: "taken", C9: "taken", C10: "taken", C11: "taken", D9: "taken", D10: "taken", D11: "taken",
                        D12: "taken", D13: "taken", E8: "taken", E9: "taken", E10: "taken", E11: "taken", E12: "taken",
                        F7: "taken", F8: "taken", F9: "taken", F15: "hold", G9: "taken", G10: "taken", G11: "taken",
                        G12: "taken", H10: "taken", H11: "taken", H12: "taken", H18: "unavailable", I11: "taken",
                        I12: "taken", I13: "taken", J10: "taken", J11: "taken", J12: "taken", K14: "taken", K15: "taken",
                        L12: "taken", M13: "taken", M14: "taken", N15: "hold", N22: "unavailable"
                    }
                }, {
                    sessionId: 2, time: "20:00", seatStatus: {
                        A2: "taken", A4: "taken", A7: "hold", A13: "taken", A18: "unavailable", A22: "hold",
                        B1: "taken", B5: "taken", B9: "hold", B14: "taken", B20: "unavailable", B24: "hold",
                        C3: "taken", C6: "taken", C11: "hold", C17: "taken", C23: "hold",
                        D2: "unavailable", D7: "taken", D12: "hold", D18: "taken", D21: "hold",
                        E1: "taken", E8: "taken", E15: "hold", E19: "taken", E24: "unavailable",
                        F4: "taken", F9: "hold", F13: "taken", F20: "hold",
                        G2: "taken", G6: "taken", G10: "hold", G16: "taken", G22: "unavailable",
                        H3: "taken", H7: "taken", H12: "hold", H18: "taken", H23: "hold",
                        I5: "unavailable", I9: "taken", I14: "hold", I20: "taken",
                        J1: "taken", J6: "hold", J11: "taken", J17: "hold", J22: "taken",
                        K4: "taken", K8: "hold", K13: "taken", K19: "hold", K23: "unavailable",
                        L2: "taken", L7: "taken", L12: "hold", L18: "taken", L24: "hold",
                        M3: "taken", M9: "hold", M14: "taken", M21: "hold",
                        N1: "taken", N6: "taken", N11: "hold", N16: "taken", N22: "hold"
                    }
                }]
            }
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
            {
                id: 1, date: "2026-10-31", sessions: [{
                    sessionId: 1, time: "13:00", seatStatus: {
                        A5: "taken", A6: "taken", A7: "taken", A8: "taken", A9: "taken", B6: "taken",
                        B7: "taken", B8: "taken", B9: "taken", B10: "taken", C7: "taken", C8: "taken",
                        C9: "taken", C10: "taken", C11: "taken", D8: "taken", D9: "taken", D10: "taken",
                        D11: "taken", D12: "taken", D13: "taken", E8: "taken", E9: "taken", E10: "taken",
                        E11: "taken", E12: "taken", F9: "taken", F10: "taken", F11: "taken", F12: "taken",
                        F13: "taken", G9: "taken", G10: "taken", G11: "taken", G12: "taken", G13: "taken",
                        H10: "taken", H11: "taken", H12: "taken", H13: "taken", I11: "taken", I12: "taken",
                        I13: "taken", J10: "taken", J11: "taken", J12: "taken", K14: "taken", K15: "taken",
                        K16: "taken", L12: "taken", L13: "taken", M13: "taken", M14: "taken", N14: "taken",
                        N15: "hold", N16: "taken"
                    }
                }, {
                    sessionId: 2, time: "16:00", seatStatus: {
                        A2: "taken", A7: "hold", A13: "unavailable", A19: "taken", B4: "hold", B9: "taken",
                        B17: "unavailable", C1: "taken", C6: "hold", C22: "taken", D3: "unavailable", D14: "taken",
                        D18: "hold", E5: "taken", E11: "unavailable", E20: "hold", F2: "hold", F9: "taken",
                        F25: "unavailable", G6: "taken", G8: "hold", G19: "taken", H3: "unavailable", H15: "taken",
                        H21: "hold", I4: "taken", I12: "hold", I23: "unavailable", J7: "taken", J10: "hold",
                        J18: "taken", K2: "unavailable", K9: "taken", K14: "hold", L5: "taken", L11: "hold",
                        L20: "unavailable", M3: "taken", M17: "hold", M22: "taken", N6: "unavailable", N12: "taken", N24: "hold"
                    }
                }, {
                    sessionId: 3, time: "20:00", seatStatus: {
                        A1: "taken", A8: "hold", A21: "unavailable", B3: "taken", B12: "hold", B20: "taken",
                        C5: "unavailable", C14: "taken", C18: "hold", D6: "taken", D11: "unavailable", D24: "hold",
                        E2: "taken", E9: "hold", E13: "taken", F4: "unavailable", F17: "taken", F22: "hold",
                        G1: "taken", G10: "hold", G23: "unavailable", H6: "taken", H12: "hold", H17: "taken",
                        I3: "unavailable", I8: "taken", I16: "hold", J4: "taken", J13: "hold", J20: "unavailable",
                        K5: "taken", K11: "hold", K22: "taken", L6: "unavailable", L12: "taken", L18: "hold",
                        M1: "taken", M9: "hold", M25: "unavailable", N2: "taken", N8: "hold", N19: "taken"
                    }
                }]
            },
            {
                id: 2, date: "2026-11-01", sessions: [{
                    sessionId: 1, time: "13:00", seatStatus: {
                        A6: "taken", A14: "hold", A18: "taken", B2: "unavailable", B10: "taken", B16: "hold",
                        C7: "taken", C11: "unavailable", C24: "hold", D4: "taken", D9: "hold", D19: "taken",
                        E1: "unavailable", E8: "taken", E22: "hold", F5: "taken", F14: "hold", F18: "unavailable",
                        G3: "taken", G12: "hold", G20: "taken", H2: "unavailable", H9: "taken", H14: "hold",
                        I6: "taken", I11: "unavailable", I21: "hold", J1: "taken", J8: "hold", J17: "taken",
                        K4: "unavailable", K13: "taken", K19: "hold", L2: "taken", L10: "hold", L23: "unavailable",
                        M4: "taken", M8: "hold", M16: "taken", N1: "unavailable", N9: "taken", N22: "hold"
                    }
                }, {
                    sessionId: 2, time: "16:00", seatStatus: {
                        A3: "hold", A9: "taken", A17: "unavailable", B5: "taken", B11: "hold", B19: "taken",
                        C2: "unavailable", C8: "taken", C21: "hold", D1: "taken", D12: "hold", D20: "unavailable",
                        E6: "taken", E10: "hold", E23: "taken", F3: "unavailable", F7: "taken", F19: "hold",
                        G4: "taken", G13: "hold", G24: "unavailable", H5: "taken", H11: "hold", H18: "taken",
                        I2: "unavailable", I7: "taken", I19: "hold", J6: "taken", J14: "hold", J22: "unavailable",
                        K1: "taken", K8: "hold", K17: "taken", L4: "unavailable", L13: "taken", L19: "hold",
                        M2: "taken", M7: "hold", M21: "unavailable", N5: "taken", N13: "hold", N20: "taken"
                    }
                }, {
                    sessionId: 3, time: "20:00", seatStatus: {
                        A1: "taken", A12: "hold", B3: "taken", C7: "hold", D2: "unavailable", E9: "taken",
                        F14: "hold", G5: "taken", H11: "hold", I4: "taken", J8: "hold", K6: "taken",
                        L10: "hold", M2: "taken", N15: "unavailable"
                    }
                }]
            }
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
            {
                id: 1, date: "2026-12-31", sessions: [{
                    sessionId: 1, time: "15:00", seatStatus: {
                        A1: "taken", A12: "hold", B3: "taken", C7: "hold", D2: "unavailable", E9: "taken",
                        F14: "hold", G5: "taken", H11: "hold", I4: "taken", J8: "hold", K6: "taken",
                        L10: "hold", M2: "taken", N15: "unavailable"
                    }
                }, {
                    sessionId: 2, time: "19:00", seatStatus: {
                        A2: "hold", A5: "taken", A8: "taken", A15: "unavailable", A21: "taken", B1: "hold",
                        B6: "taken", B10: "taken", B17: "hold", B23: "unavailable", C3: "taken", C9: "hold",
                        C16: "taken", D4: "taken", D8: "hold", D18: "taken", D24: "unavailable", E2: "taken",
                        E11: "hold", E20: "taken", F5: "taken", F12: "hold", F22: "taken", G7: "unavailable",
                        G14: "taken", G19: "hold", H6: "taken", H13: "taken", H21: "hold", I1: "unavailable",
                        I10: "taken", I18: "hold", J2: "taken", J11: "hold", J20: "taken", K5: "unavailable",
                        K9: "taken", K16: "hold", L3: "taken", L14: "taken", L22: "hold", M6: "unavailable",
                        M13: "taken", M19: "hold", N2: "taken", N11: "taken", N23: "hold"
                    }
                }]
            },
            {
                id: 2, date: "2027-01-01", sessions: [{
                    sessionId: 1, time: "19:00", seatStatus: {
                        A3: "taken", A7: "taken", A11: "hold", A14: "taken", A20: "unavailable", A24: "hold",
                        B4: "taken", B9: "taken", B15: "hold", B22: "unavailable", C6: "taken", C12: "taken",
                        C18: "hold", C25: "taken", D1: "unavailable", D5: "taken", D10: "hold", D16: "taken",
                        D23: "hold", E4: "taken", E9: "taken", E14: "hold", E21: "taken", F3: "unavailable",
                        F8: "taken", F13: "hold", F19: "taken", F24: "hold", G2: "taken", G6: "taken",
                        G11: "hold", G17: "taken", G23: "unavailable", H5: "taken", H10: "taken", H16: "hold",
                        H22: "taken", I3: "unavailable", I8: "taken", I14: "hold", I19: "taken", I24: "hold",
                        J4: "taken", J9: "taken", J15: "hold", J21: "taken", K2: "unavailable", K7: "taken",
                        K12: "hold", K18: "taken", K24: "hold", L1: "taken", L8: "taken", L13: "hold",
                        L19: "taken", L25: "unavailable", M5: "taken", M10: "taken", M15: "hold", M20: "taken",
                        N3: "taken", N9: "hold", N14: "taken", N18: "hold", N25: "unavailable"
                    }
                }]
            },
            {
                id: 3, date: "2027-01-02", sessions: [{
                    sessionId: 1, time: "19:00", seatStatus: {
                        A3: "taken", A7: "taken", A11: "hold", A14: "taken", A20: "unavailable", A24: "hold",
                        B4: "taken", B9: "taken", B15: "hold", B22: "unavailable", C6: "taken", C12: "taken",
                        C18: "hold", C25: "taken", D1: "unavailable", D5: "taken", D10: "hold", D16: "taken",
                        D23: "hold", E4: "taken", E9: "taken", E14: "hold", E21: "taken", F3: "unavailable",
                        F8: "taken", F13: "hold", F19: "taken", F24: "hold", G2: "taken", G6: "taken",
                        G11: "hold", G17: "taken", G23: "unavailable", H5: "taken", H10: "taken", H16: "hold",
                        H22: "taken", I3: "unavailable", I8: "taken", I14: "hold", I19: "taken", I24: "hold",
                        J4: "taken", J9: "taken", J15: "hold", J21: "taken", K2: "unavailable", K7: "taken",
                        K12: "hold", K18: "taken", K24: "hold", L1: "taken", L8: "taken", L13: "hold",
                        L19: "taken", L25: "unavailable", M5: "taken", M10: "taken", M15: "hold", M20: "taken",
                        N3: "taken", N9: "hold", N14: "taken", N18: "hold", N25: "unavailable"
                    }
                }]
            }
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
            { id: 1, date: "2024-11-15", sessions: [{ sessionId: 1, time: "19:30", seatStatus: {} }] },
            { id: 2, date: "2024-11-16", sessions: [{ sessionId: 1, time: "16:00", seatStatus: {} }, { sessionId: 2, time: "19:30", seatStatus: {} }] }
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
            { id: 1, date: "2025-10-10", sessions: [{ sessionId: 1, time: "19:00", seatStatus: {} }] }
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
            { id: 1, date: "2025-08-03", sessions: [{ sessionId: 1, time: "15:00", seatStatus: {} }, { sessionId: 2, time: "18:30", seatStatus: {} }, { sessionId: 3, time: "20:00", seatStatus: {} }] }
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
            { id: 1, date: "2025-09-21", sessions: [{ sessionId: 1, time: "19:00", seatStatus: {} }] },
            { id: 2, date: "2025-09-22", sessions: [{ sessionId: 1, time: "16:00", seatStatus: {} }, { sessionId: 2, time: "20:00", seatStatus: {} }] }
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
            { id: 1, date: "2025-07-12", sessions: [{ sessionId: 1, time: "19:30", seatStatus: {} }] }
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
            { id: 1, date: "2025-06-20", sessions: [{ sessionId: 1, time: "14:00", seatStatus: {} }, { sessionId: 2, time: "18:00", seatStatus: {} }] },
            { id: 2, date: "2025-06-21", sessions: [{ sessionId: 1, time: "15:00", seatStatus: {} }, { sessionId: 2, time: "19:00", seatStatus: {} }] }
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
            { id: 1, date: "2025-05-10", sessions: [{ sessionId: 1, time: "16:00", seatStatus: {} }, { sessionId: 2, time: "19:00", seatStatus: {} }, { sessionId: 3, time: "20:00", seatStatus: {} }] }
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
            { id: 1, date: "2025-04-18", sessions: [{ sessionId: 1, time: "18:30", seatStatus: {} }, { sessionId: 2, time: "20:00", seatStatus: {} }] }
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
            { id: 1, date: "2025-03-22", sessions: [{ sessionId: 1, time: "13:00", seatStatus: {} }, { sessionId: 2, time: "17:00", seatStatus: {} }, { sessionId: 3, time: "19:00", seatStatus: {} }] }
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
            { id: 1, date: "2025-02-14", sessions: [{ sessionId: 1, time: "19:00", seatStatus: {} }] },
            { id: 2, date: "2025-02-15", sessions: [{ sessionId: 1, time: "15:00", seatStatus: {} }, { sessionId: 2, time: "19:00", seatStatus: {} }] }
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