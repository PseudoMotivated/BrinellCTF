const Note = ({ note }) => {
    console.log(note)
    return (
        <li>{note.content} {note.important}</li>
    )
}

export default Note