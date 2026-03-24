package com.bridge.rhyme.repository;

import com.bridge.rhyme.entity.Bridge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BridgeRepository extends JpaRepository<Bridge, Integer> {
    List<Bridge> findByProvince(String province);
    List<Bridge> findByBridgeType(String bridgeType);
    List<Bridge> findByNameContaining(String keyword);
}
