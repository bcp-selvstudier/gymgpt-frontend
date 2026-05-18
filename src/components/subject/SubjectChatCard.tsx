import type { Subject } from '../../data/subjects'
import { AvatarIcon, SendArrowIcon } from '../../icons/Icons'

type SubjectChatCardProps = {
  subject: Subject
}

export function SubjectChatCard({ subject }: SubjectChatCardProps) {
  return (
    <div className="subject-chat-frame">
      <div className="subject-chat-panel">
        <div className="subject-chat-message">
          <div className="subject-avatar">
            <AvatarIcon />
          </div>
          <p>{subject.teacherIntro}</p>
        </div>
        <div className="subject-chat-input">
          <span>{subject.inputPlaceholder}</span>
          <button type="button" aria-label="Spørg" disabled className="subject-send-button">
            <SendArrowIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
