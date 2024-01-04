using Willu_Backend.Entities;

namespace Willu_Backend.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
