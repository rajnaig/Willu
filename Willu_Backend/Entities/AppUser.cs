namespace Willu_Backend.Entities
{
    public class AppUser
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        public AppUser()
        {
            Id = Guid.NewGuid().ToString();
            PasswordHash = new byte[32];
            PasswordSalt = new byte[32];
        }
    }
}
