// TODO: move this type into another file, 
// i don't like importing page
import {ProfileResponse} from './page';

type ProfileInfoProps = {
  profile?: ProfileResponse,
  errorMessage?: string,
  className?: string,
}

function ProfileInfoLoadingSkeleton() {
  return (
  <div className="animate-pulse space-y-2 pb-2">
      <div className="h-8 w-1/2 bg-gray-200 rounded-lg"/>
      <div className="h-6 w-1/2 bg-gray-200 rounded-lg"/>
  </div>
  )
}

export default function ProfileInfo({
  profile,
  errorMessage,
  className
}: ProfileInfoProps) {
  if (errorMessage) {
    return (
    <div className={className}>
      {errorMessage}
    </div>
    )
  }
  else if (!profile) {
    return <ProfileInfoLoadingSkeleton />
  }

  const fullName = `${profile.firstName} ${profile.lastName}`;
  return (
    <div className={className}>
      <div className="text-xl"> Hi, {fullName} </div>
      <div className="text-lg">{profile.email}</div>
    </div>
  )

}
