export default function isNicknameValid(nickname: string): boolean {
  if (nickname.trim().length > 4 && nickname.trim().length < 15) {
    return true;
  } else {
    return false;
  }
}
