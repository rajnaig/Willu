using Microsoft.EntityFrameworkCore;
using Willu_Backend.Data;
using Willu_Backend.Interfaces;
using Willu_Backend.Services;

namespace Willu_Backend.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<DataContext>(options =>
            {
                options.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });

            services.AddSwaggerGen();
            services.AddScoped<ITokenService, TokenService>();

            return services;
        }
    }
}
