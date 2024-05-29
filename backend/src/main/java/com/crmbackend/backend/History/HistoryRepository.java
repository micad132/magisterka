package com.crmbackend.backend.History;

import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoryRepository extends JpaRepository<HistoryModel, Long> {
}
