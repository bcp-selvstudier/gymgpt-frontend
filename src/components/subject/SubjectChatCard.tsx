import type { Subject } from '../../data/subjects'
import { AvatarIcon, SendArrowIcon } from '../../icons/Icons'

type SubjectChatCardProps = {
  subject: Subject
}

export function SubjectChatCard({ subject }: SubjectChatCardProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div className="subject-chat-frame">
      <div className="subject-chat-panel">
        <div className="subject-chat-message">
          <div className="subject-avatar">
            <AvatarIcon />
          </div>
          <p>{subject.teacherIntro}</p>
        </div>
        <form className="subject-chat-input" onSubmit={handleSubmit}>
          <input type="text" placeholder={subject.inputPlaceholder} aria-label="Skriv dit spørgsmål" />
          <button type="submit" aria-label="Spørg" className="subject-send-button">
            <SendArrowIcon />
          </button>
        </form>
      </div>
    </div>
  )
}
