import * as React from 'react';
import { SimpleGrid, Container } from '@chakra-ui/react';
import repositoriesList from './repos-list';
import RepositoryCard from './Card';

const OfflineData = () => {
  return (
    <Container maxW="7xl" p="5" mx="auto">
      <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
        {repositoriesList().map((repo, index) => (
          <RepositoryCard
            key={index}
            title={repo.title}
            description={repo.description}
            cover={repo.cover}
            techStack={repo.techStack}
            url={repo.url}
            stargazers_count={repo.stargazers_count}
            live={repo.live}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default OfflineData;
