import React from 'react'
import { Member } from '../types'

interface MemberCardProps {
  member: Member;
  index: number;
}

const MemberCard: React.FC<MemberCardProps> = ({member, index}) => {
  return (
    <div>MemberCard</div>
  )
}

export default MemberCard