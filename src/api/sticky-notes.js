import { StickyNote } from "models";

let notes = []; // fake database

export default function handler(req, res) {
    let { id, message, author } = req.body;

    switch (req.method) {
        case "GET":
            res.status(200).json(notes);
            break;
        case "POST":
            if (message) {
                const note = new StickyNote(notes.length, req.body.message);
                notes.push(note);
                res.status(200).json(note);
            } else {
                res.status(400).json({
                    data: "Field message is missing from request data",
                });
            }
            break;
        case "PUT":
            if (typeof id === "number" && message && author) {
                if (notes[id] && notes[id].author == author) {
                    notes[id].message = message;
                    res.status(200).json(notes[id]);
                } else {
                    res.status(404).json({
                        data: `Message ${id} does not exist`,
                    });
                }
            } else {
                res.status(400).json({
                    data: "Fields id, message and author are missing/incorrect from request data",
                });
            }
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
